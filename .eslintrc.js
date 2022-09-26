module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: ["airbnb-base", "prettier"],
    plugins: ["prettier", "only-warn"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
    },
    pattern: {
        //allow js
    },
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
    },
};
