import fs from "fs";
import { dirname, join } from "path";
import { createRequire } from "node:module";
import { __dirname } from "./config.js";
import matter from "gray-matter";
import beautify from "js-beautify";
import nunjucks from "nunjucks";
import { marked } from "marked";

const renderer = new marked.Renderer();

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

const getMacroOptionsJson = (componentName) => {
  const optionsFilePath = join(
    dirname(require.resolve("@nationalarchives/frontend")),
    `components/${componentName}/macro-options.json`,
  );
  return JSON.parse(fs.readFileSync(optionsFilePath, "utf8"));
};

const getAdditionalComponentOptions = (options) => {
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
    .reduce((a, b) => {
      return a.concat(b);
    }, []);

  const namesWithoutDuplicates = names.filter((optionName, index) => {
    return names.indexOf(optionName) === index;
  });

  return namesWithoutDuplicates;
};

const getNestedOptions = (options) => {
  return options
    .filter((option) => option.params)
    .map((option) => {
      let output = [option];
      if (option.params) {
        output = output.concat(getNestedOptions(option.params));
      }
      return output;
    })
    .reduce((a, b) => {
      return a.concat(b);
    }, []);
};

const renderDescriptionsAsMarkdown = (option) => {
  if (option.description) {
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
};

const addSlugs = (option) => {
  option.slug = option.name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  if (option.params) {
    option.params = option.params.map(addSlugs);
  }
  return option;
};

const require = createRequire(import.meta.url);
const nunjucksOptions = {
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
        inline: options.inline.filter((tag) => !["label"].includes(tag)),
        max_preserve_newlines: 0,
        wrap_attributes: "preserve",
      });
    },
    getNunjucksCode: (path) => {
      const fileContents = getFileContents(path);
      const parsedFile = matter(fileContents);

      return parsedFile.content
        .replace(/{%\s*extends\s*\S*\s*%}\s+/, "")
        .trim();
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
    headingsList: function (content) {
      const regex = /<h[1-6] id="([\w\-]+)"[^>]+>[\s\n]*([\w\s]+)[\s\n]*</gm;
      let headings = [];
      let tmp;
      while ((tmp = regex.exec(content)) !== null) {
        headings.push({ title: tmp[2], href: tmp[1] });
      }
      return headings;
    },
  },
};

export default nunjucksOptions;
