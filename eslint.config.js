import js from "@eslint/js";
import vitest from "@vitest/eslint-plugin";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    ignores: [
      "node_modules",
      "pnpm-lock.yaml",
      // These files are provided by the assignment template
      "src/*",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.test.*"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
  prettierRecommended,
];
