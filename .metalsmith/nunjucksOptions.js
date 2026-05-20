import fs from "fs";
import { createRequire } from "node:module";
import { dirname, join } from "path";

import matter from "gray-matter";
import beautify from "js-beautify";
import { marked } from "marked";
import nunjucks from "nunjucks";

import { __dirname } from "./config.js";

const renderer = new marked.Renderer(),
  getFileContents = (path) => {
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
  },
  getMacroOptionsJson = (componentName) => {
    const optionsFilePath = join(
      dirname(require.resolve("@nationalarchives/frontend")),
      `components/${componentName}/macro-options.json`,
    );
    return JSON.parse(fs.readFileSync(optionsFilePath, "utf8"));
  },
  getAdditionalComponentOptions = (options) => {
    const names = options
        .map((option) => {
          let output = [];
          if (option.isComponent) {
            if (option.name === "hint" || option.name === "label") {
              output.push(option.name);
            }
          }
          if (option.params) {
            output = output.concat(
              getAdditionalComponentOptions(option.params),
            );
          }
          return output;
        })
        .reduce((a, b) => a.concat(b), []),
      namesWithoutDuplicates = names.filter(
        (optionName, index) => names.indexOf(optionName) === index,
      );

    return namesWithoutDuplicates;
  },
  getNestedOptions = (options) =>
    options
      .filter((option) => option.params)
      .map((option) => {
        let output = [option];
        if (option.params) {
          output = output.concat(getNestedOptions(option.params));
        }
        return output;
      })
      .reduce((a, b) => a.concat(b), []),
  renderDescriptionsAsMarkdown = (option) => {
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
    if (option.paramsFrom) {
      option.params = getMacroOptionsJson(option.paramsFrom).map(
        renderDescriptionsAsMarkdown,
      );
    }
    return option;
  },
  addSlugs = (option) => {
    option.slug = option.name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    if (option.params) {
      option.params = option.params.map(addSlugs);
    }
    return option;
  },
  getNunjucksCode = (path) => {
    const fileContents = getFileContents(path),
      parsedFile = matter(fileContents);
    return parsedFile.content.replace(/{%\s*extends\s*\S*\s*%}\s+/, "").trim();
  },
  require = createRequire(import.meta.url),
  nunjucksOptions = {
    path: [
      join(__dirname, "layouts"),
      join(dirname(require.resolve("@nationalarchives/frontend")), "../"),
    ],
    globals: {
      getHTMLCode: (path) => {
        const fileContents = getFileContents(path),
          parsedFile = matter(fileContents),
          { content } = parsedFile;

        let html = "";
        try {
          html = nunjucks.renderString(content).trim();
        } catch (err) {
          if (err) {
            console.log(`Could not get HTML code from ${path}`);
          }
        }

        const options = beautify.html.defaultOptions();

        return beautify.html(html, {
          indent_size: 2,
          max_preserve_newlines: 0,
        });
      },
      getNunjucksCode,
      getJinjaCode: (path) => {
        const nunjucksCode = getNunjucksCode(path);
        return nunjucksCode
          .replace(/(\s)(\w+): /g, '$1"$2": ')
          .replace(": true", ": True")
          .replace(": false", ": False")
          .replace(
            /from "nationalarchives\/components\/([\w\-]+)\/macro.njk"/g,
            'from "components/$1/macro.html"',
          )
          .replace(
            /(from|include) "nationalarchives\/templates\/layouts\/([\w\-]+).njk"/g,
            '$1 "layouts/$2.html"',
          )
          .replaceAll(
            'from "nationalarchives\/templates\/partials\/logo\/macro.njk"',
            'from "partials/logo/macro.html"',
          );
      },
      getMacroOptions: (componentName) => {
        const options = getMacroOptionsJson(componentName)
            .map(addSlugs)
            .map(renderDescriptionsAsMarkdown),
          nestedOptions = getNestedOptions(options),
          additionalComponents = getAdditionalComponentOptions(options),
          optionGroups = [
            {
              name: "Primary options",
              id: "primary",
              options,
            },
          ]
            .concat(
              nestedOptions.map((option) => ({
                name: `Options for ${option.name}`,
                id: option.name,
                options: option.params,
              })),
            )
            .concat(
              additionalComponents.map((name) => {
                const additionalComponentOptions = getMacroOptionsJson(
                  name,
                ).map(renderDescriptionsAsMarkdown);
                return {
                  name: `Options for ${name}`,
                  id: name,
                  options: additionalComponentOptions,
                };
              }),
            );

        return optionGroups;
      },
      sortArrayOfObjectsByKey: (array, key) =>
        array.sort((a, b) => {
          const x = a[key] || 99,
            y = b[key] || 99;
          return x < y ? -1 : x > y ? 1 : 0;
        }),
    },
    filters: {
      prettyDate(date) {
        return new Date(date).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      },
      unslugify(text, capitalizeFirst = true) {
        const words = text.split("-");
        if (capitalizeFirst) {
          words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        }
        return words.join(" ");
      },
      iso8601(date) {
        return new Date(date).toISOString();
      },
      jsonDump(data) {
        return JSON.stringify(data, null, 2);
      },
      camelToSpace(data) {
        return data.replace(/([a-z]+)([A-Z])/, "$1 $2").toLowerCase();
      },
      kebabToSpace(data) {
        return data.replace(/([a-z]+)-([a-z])/, "$1 $2").toLowerCase();
      },
      setAttribute(dictionary, key, value) {
        dictionary[key] = value;
        return dictionary;
      },
      headingsList(content) {
        const regex =
            /<h([1-6]) id="([\w\d\-]+)"[^>]+>\s*([\w\d\s\.\-\(\)\"'<>\[\]]+)\s*</gmu,
          headingsRaw = [];
        let tmp = null;
        while ((tmp = regex.exec(content)) !== null) {
          /* eslint-disable no-magic-numbers */
          headingsRaw.push({ title: tmp[3], href: tmp[2], level: tmp[1] });
        }
        const groupHeadings = (index, grouping) => {
            if (index < headingsRaw.length) {
              const nextHeading = headingsRaw[index];
              if (grouping.length) {
                const prevHeading = grouping.slice().pop();
                try {
                  if (nextHeading.level > prevHeading.level) {
                    prevHeading.children = prevHeading.children || [];
                    return groupHeadings(index, prevHeading.children);
                  } else if (nextHeading.level == prevHeading.level) {
                    grouping.push({ ...nextHeading });
                    return groupHeadings(++index, grouping);
                  }
                  throw { index, heading: nextHeading };
                } catch (higherHeading) {
                  if (higherHeading.heading.level == prevHeading.level) {
                    grouping.push({ ...higherHeading.heading });
                    return groupHeadings(++higherHeading.index, grouping);
                  }
                  throw higherHeading;
                }
              } else {
                grouping.push({ ...nextHeading });
                groupHeadings(++index, grouping);
              }
            }
            return grouping;
          },
          /* eslint-disable no-magic-numbers */
          headings = groupHeadings(0, []);
        return headings;
      },
    },
  };

export default nunjucksOptions;
