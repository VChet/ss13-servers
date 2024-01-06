import antfu from "@antfu/eslint-config";

export default antfu({
  svelte: true,
  rules: {
    "antfu/if-newline": "off",
    "curly": ["error", "multi-line"],
    "no-console": "off",
    "style/arrow-parens": ["error", "always"],
    "style/brace-style": ["error", "1tbs"],
    "style/comma-dangle": ["error", "never"],
    "style/max-statements-per-line": "off",
    "style/operator-linebreak": ["error", "after"],
    "style/quotes": ["error", "double"],
    "style/semi": ["error", "always"],
    "svelte/html-quotes": ["error", { prefer: "double" }],
    "ts/consistent-type-definitions": "off",
    "yaml/quotes": ["error", { prefer: "double" }]
  }
});
