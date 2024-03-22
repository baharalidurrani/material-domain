module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // 'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh' /*'prettier'*/],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    // 'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'comma-dangle': 'off',
    'multiline-ternary': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // 'import/newline-after-import': [
    //   'warn',
    //   {
    //     count: 1,
    //   },
    // ],
    // 'import/order': [
    //   'warn',
    //   {
    //     groups: ['builtin', 'external', 'internal'],
    //     pathGroups: [
    //       {
    //         pattern: 'react*',
    //         group: 'external',
    //         position: 'before',
    //       },
    //       {
    //         pattern: 'src/**',
    //         group: 'internal',
    //       },
    //     ],
    //     pathGroupsExcludedImportTypes: ['react'],
    //     'newlines-between': 'never',
    //     alphabetize: {
    //       order: 'asc',
    //       caseInsensitive: true,
    //     },
    //   },
    // ],
  },
};
