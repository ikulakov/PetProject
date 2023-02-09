module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    "indent": "off",
    "@typescript-eslint/indent": ["warn", 4],
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/prefer-nullish-coalescing": 0
  },
  root: true
}
