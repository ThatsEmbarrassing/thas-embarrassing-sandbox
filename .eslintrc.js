module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
            "./tsconfig.eslint.json",
            "./config/*/tsconfig.json",
            "./packages/*/tsconfig.json",
            "./services/*/tsconfig.json",
        ],
    },
};
