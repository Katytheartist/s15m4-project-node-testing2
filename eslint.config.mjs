import globals from "globals";
import pluginJs from "@eslint/js";

const jestGlobals = {
  ...globals.jest,
};

export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { 
    globals: 
    globals.node,
    ...jestGlobals 
  }},
  pluginJs.configs.recommended,
];