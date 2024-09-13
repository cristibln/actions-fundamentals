// eslint.config.js
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
            google: true,
        },
    },
    extends: ['airbnb-base'],
    rules: {
        'no-param-reassign': 0,
        'no-shadow': 'off',
        'no-new': 'off',
    },
    ignorePatterns: [],
});