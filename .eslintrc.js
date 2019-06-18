module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended',
  ],
  "env": {
    "browser": true,
  },
  "plugins": ["typescript", "@typescript-eslint", "react"],
  "rules": {
    "prettier/prettier": "error",
    '@typescript-eslint/indent': 0,
    "react/no-unescaped-entities": 1,
    "no-unused-vars": 1,
    "@typescript-eslint/explicit-function-return-type": 1,
    "@typescript-eslint/camelcase": 0
  }
};
