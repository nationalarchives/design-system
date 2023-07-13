import fs from "fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, join } from "path";
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
import matter from "gray-matter";
import beautify from "js-beautify";
import nunjucks from "nunjucks";

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

const getFileContents = (path) => {
  let fileContents;
  try {
    fileContents = fs.readFileSync(path);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(err.message);
    } else {
      throw err;
    }
  }
  return fileContents.toString();
};

function getMacroOptionsJson(componentName) {
  // const optionsFilePath = join(dirname(require.resolve('@nationalarchives/frontend')), `components/${componentName}/macro-options.json`)
  // return JSON.parse(fs.readFileSync(optionsFilePath, 'utf8'))
  return [];
}

// Some which are only used in other components are intentionally not displayed in the GOV.UK Design System guidance.
// We want to add these as a separate group of options that can be linked to from the original options for the component.
function getAdditionalComponentOptions(options) {
  const names = options
    .map((option) => {
      let output = [];
      if (option.isComponent) {
        if (option.name === "hint" || option.name === "label") {
          output.push(option.name);
        }
      }
      if (option.params) {
        output = output.concat(getAdditionalComponentOptions(option.params));
      }
      return output;
    })
    // Flatten array
    .reduce((a, b) => {
      return a.concat(b);
    }, []);

  const namesWithoutDuplicates = names.filter((optionName, index) => {
    return names.indexOf(optionName) === index;
  });

  return namesWithoutDuplicates;
}

// To display nested options that such as rows in a table, we need to make a separate group to be displayed.
function getNestedOptions(options) {
  return (
    options
      .filter((option) => option.params)
      .map((option) => {
        let output = [option];
        if (option.params) {
          output = output.concat(getNestedOptions(option.params));
        }
        return output;
      })
      // Flatten array
      .reduce((a, b) => {
        return a.concat(b);
      }, [])
  );
}

function renderDescriptionsAsMarkdown(option) {
  if (option.description) {
    // Explicity set deprecated properties to false
    option.description = marked(option.description, {
      headerIds: false,
      mangle: false,
      renderer,
    });
  }
  if (option.params) {
    option.params = option.params.map(renderDescriptionsAsMarkdown);
  }
  return option;
}

function addSlugs(option) {
  // camelCase into kebab-case
  option.slug = option.name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  if (option.params) {
    option.params = option.params.map(addSlugs);
  }
  return option;
}

const require = createRequire(import.meta.url);
const nunjucksOptions = {
  // root: __dirname,
  path: [
    join(__dirname, "layouts"),
    join(dirname(require.resolve("@nationalarchives/frontend")), "../"),
  ],
  globals: {
    getHTMLCode: (path) => {
      const fileContents = getFileContents(path);

      const parsedFile = matter(fileContents);
      const content = parsedFile.content;

      let html = "";
      try {
        html = nunjucks.renderString(content).trim();
      } catch (err) {
        if (err) {
          console.log("Could not get HTML code from " + path);
        }
      }

      const options = beautify.html.defaultOptions();

      return beautify.html(html, {
        indent_size: 2,
        // Ensure nested labels in headings are indented properly
        inline: options.inline.filter((tag) => !["label"].includes(tag)),
        // Remove blank lines
        max_preserve_newlines: 0,
        // Ensure attribute wrapping in header SVG is preserved
        wrap_attributes: "preserve",
      });
    },
    getNunjucksCode: (path) => {
      const fileContents = getFileContents(path);

      const parsedFile = matter(fileContents);

      // Omit any `{% extends "foo.njk" %}` nunjucks code, because we extend
      // templates that only exist within the Design System – it's not useful to
      // include this in the code we expect others to copy.
      return parsedFile.content.replace(/{%\s*extends\s*\S*\s*%}\s+/, "");
    },
    getMacroOptions: (componentName) => {
      const options = getMacroOptionsJson(componentName)
        .map(addSlugs)
        .map(renderDescriptionsAsMarkdown);

      const nestedOptions = getNestedOptions(options);
      const additionalComponents = getAdditionalComponentOptions(options);

      const optionGroups = [
        {
          name: "Primary options",
          id: "primary",
          options,
        },
      ]
        .concat(
          nestedOptions.map((option) => {
            return {
              name: "Options for " + option.name,
              id: option.name,
              options: option.params,
            };
          }),
        )
        .concat(
          additionalComponents.map((name) => {
            const additionalComponentOptions = getMacroOptionsJson(name).map(
              renderDescriptionsAsMarkdown,
            );
            return {
              name: "Options for " + name,
              id: name,
              options: additionalComponentOptions,
            };
          }),
        );

      return optionGroups;
    },
  },
  filters: {
    prettyDate: function (date) {
      return new Date(date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    jsonDump: function (data) {
      return JSON.stringify(data, null, 2);
    },
  },
};

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
    description: "",
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
        pattern: "((components|patterns)/*)?index.html",
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
