import { readFileSync } from "fs";
import { join, relative } from "path";

import collections from "@metalsmith/collections";
import inplace from "@metalsmith/in-place";
import jsBundle from "@metalsmith/js-bundle";
import layouts from "@metalsmith/layouts";
import markdown from "@metalsmith/markdown";
import permalinks from "@metalsmith/permalinks";
import sass from "@metalsmith/sass";
import { glob } from "glob";
import jsTransformerNunjucks from "jstransformer-nunjucks";
import Metalsmith from "metalsmith";
import renamer from "metalsmith-renamer";
import sitemap from "metalsmith-sitemap";

import { __dirname } from "./.metalsmith/config.js";
import markdownRenderer from "./.metalsmith/markdownRenderer.js";
import nunjucksOptions from "./.metalsmith/nunjucksOptions.js";
import packageInfo from "./package-lock.json" with { type: "json" };

const t1 = performance.now();

Metalsmith(__dirname)
  .source("./src")
  .destination("./design-system")
  .clean(true)
  .env({
    DEBUG: process.env.DEBUG,
  })
  .metadata({
    sitename: "The National Archives Design System",
    siteurl: "https://design-system.nationalarchives.gov.uk/",
    defaultDescription:
      "Design your service using National Archives styles, components and patterns",
    generatorname: "Metalsmith",
    generatorurl: "https://metalsmith.io/",
    tnaFrontendVersion:
      packageInfo.packages["node_modules/@nationalarchives/frontend"].version,
    nodeVersion: process.version,
  })
  .use(async (files, metalsmith, done) => {
    /* eslint-disable func-style */
    async function copyAssets(pattern, options) {
      const assets = await glob(pattern, options);
      for (const asset of assets) {
        const input = join(options.cwd, asset);
        if (relative(options.cwd, input).startsWith("..")) {
          throw new Error(`Path traversal detected: ${asset}`);
        }
        const output = join(options.dest, asset);
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
      copyAssets("*.js?(.map)", {
        cwd: "node_modules/@nationalarchives/frontend/nationalarchives/",
        dest: "static/scripts",
      }),
      copyAssets("*", {
        cwd: "lib/static/",
        dest: "",
      }),
    ]);
    done();
  })
  .use(
    renamer({
      markdown: {
        pattern: "**/*.md",
        rename: (name) => `${name}.njk`,
      },
    }),
  )
  .use(
    inplace({
      transform: jsTransformerNunjucks,
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
          // "(get-started|styles|components|content|performance)/index.html",
          "(get-started|styles|components|content)/index.html",
        sortBy: "order",
        refer: false,
      },
      frontPage: {
        // Pattern: "(styles|components|content|performance)/index.html",
        pattern: "(styles|components|content)/index.html",
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
      match: ["**/*.html", "!google9f936c84a60090b4.html"],
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
      quietDeps: true,
      entries: {
        "lib/index.scss": "css/index.css",
        "lib/all.scss": "css/all.css",
        "lib/print.scss": "css/print.css",
        "lib/fa.scss": "css/fa.css",
        "lib/ie.scss": "css/ie.css",
      },
    }),
  )
  .use(
    jsBundle({
      minify: true,
      sourcemap: true,
      drop: ["debugger"],
      entries: {
        code: "lib/code.js",
        index: "lib/index.js",
        sidebar: "lib/sidebar.js",
      },
    }),
  )
  .use(
    sitemap({
      hostname: "https://design-system.nationalarchives.gov.uk/",
      omitIndex: true,
      pattern: ["**/*.html", "!google9f936c84a60090b4.html"],
    }),
  )
  .build((err) => {
    if (err) {
      throw err;
    }
    /* eslint-disable no-console */
    console.log(
      `Build success in ${((performance.now() - t1) / 1000).toFixed(1)}s`,
    );
  });
