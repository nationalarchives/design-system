import fs from "fs";
import { dirname, join } from "path";
import { createRequire } from "node:module";
import { __dirname } from "./config.js";
import matter from "gray-matter";
import beautify from "js-beautify";
import nunjucks from "nunjucks";

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
  // const optionsFilePath = join(dirname(require.resolve('@nationalarchives/frontend')), `components/${componentName}/macro-options.json`)
  // return JSON.parse(fs.readFileSync(optionsFilePath, 'utf8'))
  return [];
};

// Some which are only used in other components are intentionally not displayed in the GOV.UK Design System guidance.
// We want to add these as a separate group of options that can be linked to from the original options for the component.
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
    // Flatten array
    .reduce((a, b) => {
      return a.concat(b);
    }, []);

  const namesWithoutDuplicates = names.filter((optionName, index) => {
    return names.indexOf(optionName) === index;
  });

  return namesWithoutDuplicates;
};

// To display nested options that such as rows in a table, we need to make a separate group to be displayed.
const getNestedOptions = (options) => {
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
};

const renderDescriptionsAsMarkdown = (option) => {
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
};

const addSlugs = (option) => {
  // camelCase into kebab-case
  option.slug = option.name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  if (option.params) {
    option.params = option.params.map(addSlugs);
  }
  return option;
};

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
  },
};

export default nunjucksOptions;
