import { defineConfig, globalIgnores } from "eslint/config";
import tnaEslintConfig from "@nationalarchives/eslint-config";
import globals from "globals";

export default defineConfig([
  ...tnaEslintConfig,
  {
    files: ["**/*"],
    rules: {
      "max-statements": "off",
      "one-var": "off",
      "prefer-named-capture-group": "off",
      "require-unicode-regexp": "off",
      "sort-var": "off",
    },
  },
  {
    files: ["metalsmith.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "new-cap": "off",
      "no-magic-numbers": "off",
    },
  },
  {
    files: [".metalsmith/**/*"],
    rules: {
      "func-names": "off",
      "no-ternary": "off",
    },
  },
  globalIgnores(["design-system/**/*"]),
]);
