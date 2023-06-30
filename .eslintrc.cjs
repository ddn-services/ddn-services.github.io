module.exports = {
    env: { node: true, browser: true, es2021: true, jest: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': 1
    }
};
