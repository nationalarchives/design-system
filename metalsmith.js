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
import packageInfo from "./package.json" assert { type: "json" };

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
    // description: "",
    generatorname: "Metalsmith",
    generatorurl: "https://metalsmith.io/",
    msVersion: packageInfo.dependencies.metalsmith,
    nodeVersion: process.version,
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
      top: {
        pattern: "(get-started|styles|components|patterns)/index.html",
        sortBy: "order",
      },
      components: {
        pattern: "components/*/index.html",
        filterBy: (file) => file.path !== "components/index.html",
      },
      patterns: {
        pattern: "patterns/*/index.html",
        filterBy: (file) => file.path !== "patterns/index.html",
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
      default: "simple.njk",
      engineOptions: nunjucksOptions,
    }),
  )
  .use(
    sass({
      entries: {
        "lib/index.scss": "css/index.css",
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
      },
    }),
  )
  .build((err) => {
    if (err) throw err;
    console.log(
      `Build success in ${((performance.now() - t1) / 1000).toFixed(1)}s`,
    );
  });
