module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended',
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],
  "plugins": ["@typescript-eslint", "react"],
  "rules": {
    "prettier/prettier": "error",
    '@typescript-eslint/indent': ['error', 2]
  }
};
