import markdownRenderer from "./.metalsmith/markdownRenderer.js";
import nunjucksOptions from "./.metalsmith/nunjucksOptions.js";
import { __dirname } from "./.metalsmith/config.js";
import Metalsmith from "metalsmith";
import inplace from "@metalsmith/in-place";
import layouts from "@metalsmith/layouts";
import markdown from "@metalsmith/markdown";
import permalinks from "@metalsmith/permalinks";
import renamer from "metalsmith-renamer";
import collections from "@metalsmith/collections";
import jsBundle from "@metalsmith/js-bundle";
import sass from "@metalsmith/sass";
import sitemap from "metalsmith-sitemap";
import packageInfo from "./package.json" assert { type: "json" };
import { readFileSync } from "fs";
import { join } from "path";
import { glob } from "glob";

const t1 = performance.now();

Metalsmith(__dirname)
  .source("./src")
  .destination("./design-system")
  .clean(true)
  .env({
    DEBUG: process.env.DEBUG,
    // NODE_ENV: process.env.NODE_ENV,
  })
  .metadata({
    sitename: "The National Archives Design System",
    siteurl: "https://nationalarchives.github.io/design-system",
    description:
      "Design your service using National Archives styles, components and patterns",
    generatorname: "Metalsmith",
    generatorurl: "https://metalsmith.io/",
    metalsmithVersion: packageInfo.dependencies.metalsmith.replace(/^[\^]/, ""),
    tnaFrontendVersion: packageInfo.dependencies[
      "@nationalarchives/frontend"
    ].replace(/^[\^]/, ""),
    nodeVersion: process.version,
  })
  .use(async (files, metalsmith, done) => {
    async function copyAssets(pattern, options) {
      const assets = await glob(pattern, options);
      for (const asset of assets) {
        const input = join(options.cwd, asset);
        const output = join(options.dest, asset);
        // console.log(`${input} -> ${output}`);
        files[output] = {
          contents: readFileSync(input),
        };
      }
    }
    await Promise.all([
      copyAssets("images/*.{svg,png,ico}", {
        cwd: "node_modules/@nationalarchives/frontend/nationalarchives/assets/",
        dest: "static/assets",
      }),
      copyAssets("fonts/*", {
        cwd: "node_modules/@nationalarchives/frontend/nationalarchives/assets/",
        dest: "static/assets",
      }),
      copyAssets("*.js", {
        cwd: "node_modules/@nationalarchives/frontend/nationalarchives/",
        dest: "static/scripts",
      }),
    ]);
    done();
  })
  .use(
    renamer({
      markdown: {
        pattern: "**/*.md",
        rename: (name) => {
          return `${name}.njk`;
        },
      },
    }),
  )
  .use(
    inplace({
      pattern: "**/*.njk",
      engineOptions: nunjucksOptions,
    }),
  )
  .use(
    markdown({
      renderer: markdownRenderer,
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    }),
  )
  .use(
    collections({
      home: {
        pattern: "index.html",
        refer: false,
      },
      top: {
        pattern:
          "(get-started|styles|components|content|performance)/index.html",
        sortBy: "order",
        refer: false,
      },
      "get-started": {
        pattern: "get-started/*/index.html",
        filterBy: (file) => file.path !== "get-started/index.html",
        sortBy: "order",
        refer: false,
      },
      styles: {
        pattern: "styles/*/index.html",
        filterBy: (file) => file.path !== "styles/index.html",
        refer: false,
      },
      components: {
        pattern: "components/*/index.html",
        filterBy: (file) => file.path !== "components/index.html",
        refer: false,
      },
      content: {
        pattern: "content/*/index.html",
        filterBy: (file) => file.path !== "content/index.html",
        refer: false,
      },
      performance: {
        pattern: "performance/*/index.html",
        filterBy: (file) => file.path !== "performance/index.html",
        refer: false,
      },
    }),
  )
  .use(
    permalinks({
      relative: false,
    }),
  )
  .use(
    layouts({
      engineOptions: nunjucksOptions,
    }),
  )
  .use(
    sass({
      entries: {
        "lib/index.scss": "css/index.css",
        "lib/all.scss": "css/all.css",
        "lib/fa.scss": "css/fa.css",
      },
    }),
  )
  .use(
    jsBundle({
      bundle: true,
      minify: false,
      sourcemap: true,
      drop: [],
      entries: {
        index: "lib/index.js",
        collection: "lib/collection.js",
        sidebar: "lib/sidebar.js",
      },
    }),
  )
  .use(
    sitemap({
      hostname: "https://nationalarchives.github.io/design-system",
      omitIndex: true,
    }),
  )
  .build((err) => {
    if (err) throw err;
    console.log(
      `Build success in ${((performance.now() - t1) / 1000).toFixed(1)}s`,
    );
  });
