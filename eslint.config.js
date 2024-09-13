module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'airbnb-base',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    globals: {
        google: true
    },
    ignorePatterns: [],
    rules: {
        "no-param-reassign": 0,
        "no-shadow": "off",
        "no-new": "off"
    },
};