import { fileURLToPath } from "node:url";
import { dirname } from "path";
import Metalsmith from "metalsmith";
import layouts from "@metalsmith/layouts";
import markdown from "@metalsmith/markdown";
import permalinks from "@metalsmith/permalinks";
import sass from "@metalsmith/sass";
import packageInfo from "./package.json" assert { type: "json" };

const __dirname = dirname(fileURLToPath(import.meta.url));
const t1 = performance.now();

import { marked } from "marked";
const markdownRenderer = new marked.Renderer();

markdownRenderer.heading = function (text, level) {
  let headingSize = "";
  switch (level) {
    case 1:
      headingSize = "tna-heading--xl";
      break;
    case 2:
      headingSize = "tna-heading--l";
      break;
    case 3:
      headingSize = "tna-heading--m";
      break;
    case 4:
    case 5:
    case 6:
      headingSize = "tna-heading--s";
      break;
  }
  return `
  <h${level} class="tna-heading ${headingSize}">
    ${text}
  </h${level}>`;
};

markdownRenderer.list = function (body, ordered) {
  const element = ordered ? "ol" : "ul";
  return `
  <${element} class="tna-ul">
    ${body}
  </${element}>`;
};

markdownRenderer.paragraph = function (text) {
  return `
  <p class="tna-p">
    ${text}
  </p>`;
};

const prettyDate = function (date) {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

Metalsmith(__dirname)
  .source("./src")
  .destination("./build")
  .clean(true)
  .env({
    DEBUG: process.env.DEBUG,
    NODE_ENV: process.env.NODE_ENV,
  })
  .metadata({
    sitename: "The National Archives Design System",
    siteurl: "https://nationalarchives.github.io/design-system",
    description: "",
    generatorname: "Metalsmith",
    generatorurl: "https://metalsmith.io/",
    msVersion: packageInfo.dependencies.metalsmith,
    nodeVersion: process.version,
  })
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
    permalinks({
      relative: false,
    }),
  )
  .use(
    layouts({
      default: "layouts/default.njk",
      engineOptions: {
        root: __dirname,
        filters: {
          prettyDate,
        },
      },
    }),
  )
  .use(
    sass({
      entries: {
        "lib/index.scss": "css/index.css",
      },
    }),
  )
  .build((err) => {
    if (err) throw err;
    console.log(
      `Build success in ${((performance.now() - t1) / 1000).toFixed(1)}s`,
    );
  });
