export default {
  extends: [
    "stylelint-config-standard",
    "@stylistic/stylelint-config",
    "stylelint-config-recess-order"
  ],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-order"
  ],
  overrides: [{ files: ["**/*.svelte"], customSyntax: "postcss-html" }],
  ignoreFiles: ["dist/**"],
  rules: {
    "@stylistic/selector-list-comma-newline-after": "always-multi-line",
    "at-rule-empty-line-before": "never",
    "declaration-empty-line-before": "never",
    "plugin/declaration-block-no-ignored-properties": true,
    "rule-empty-line-before": "never",
    "selector-class-pattern": "[a-z]([a-z-]+)?(__([a-z]+-?)+)?(--([a-z]+-?)+){0,2}"
  }
};
