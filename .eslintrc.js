module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: "./tsconfig.json"
    },
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    rules: {
        "indent": ["error", 4, { SwitchCase: 1 }], // 缩进4空格
        "semi": ["error", "always"], // 结尾;号
        "quotes": ["error", "double"], // 双引号
        // "no-unused-vars": "off",
        "accessor-pairs": "off",
        "import/export": "off",
        "no-trailing-spaces": "off",
        "eqeqeq": "off",
        "no-use-before-define": "off",
        // "space-before-function-paren": ["error", "never"], // 方法体前面无空格
        "no-redeclare": "off",
        "camelcase": "off", // 驼峰
        "no-void": "off",
        "no-inner-declarations": "off",
        "space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }]
    }
};
