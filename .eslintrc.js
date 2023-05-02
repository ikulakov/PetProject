module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        // 'standard-with-typescript',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest'
    },
    plugins: [
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'ulbi-tv-plugin'
    ],
    rules: {
        indent: 'off',
        '@typescript-eslint/indent': ['warn', 4],
        '@typescript-eslint/strict-boolean-expressions': 0,
        // '@typescript-eslint/prefer-nullish-coalescing': 0,
        // 'i18next/no-literal-string': 0,
        '@typescript-eslint/restrict-plus-operands': 0,
        '@typescript-eslint/explicit-function-return-type': 0, // "warn"
        '@typescript-eslint/consistent-type-assertions': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/consistent-type-imports': 0,
        '@typescript-eslint/consistent-type-exports': 0,
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-invalid-void-type': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/no-unnecessary-condition': 0,
        'ulbi-tv-plugin/path-checker': ['error', {alias: '@'}],
        'ulbi-tv-plugin/public-api-imports': [
            'error', 
            {
                alias: '@',
                testFiles: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx']
            }
        ],
        'ulbi-tv-plugin/layer-imports': [
            'error', 
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            }
        ],
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 0
        }
    }],
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true
    }
}
