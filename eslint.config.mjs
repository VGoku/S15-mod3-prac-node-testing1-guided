import globals from "globals";  // Import global variables from the "globals" package
import pluginJs from "@eslint/js"; // Import the ESLint plugin for JavaScript

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}}, // Configure for all JavaScript files with CommonJS module system
  {languageOptions: { globals: globals.node }}, // Set the globals to "node" for Node.js environment (provides Node.js-specific globals)
  pluginJs.configs.recommended, // Use the recommended configuration from the @eslint/js plugin (a set of ESLint rules for JavaScript)
];
