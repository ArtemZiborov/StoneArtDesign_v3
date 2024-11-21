/* eslint-env node */
// This file is used to configure ESLint for the Firebase Functions folder
module.exports = {
  env: {
    node: true, // This enables Node.js global variables
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    "no-unused-vars": "off", // Disables warnings for unused variables
    "no-undef": "off", // Disables warnings for undefined variables
  },
  globals: {
    module: "readonly",
    require: "readonly",
    exports: "readonly",
  },
};
