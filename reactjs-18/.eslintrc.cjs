module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
}
