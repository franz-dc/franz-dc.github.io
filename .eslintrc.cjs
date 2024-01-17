module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/external-module-folders': ['.yarn'],
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // prettier
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // eslint
    'no-console': [
      'warn',
      {
        allow: ['off', 'error'],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ],
    'no-extra-boolean-cast': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    semi: ['error', 'always'],
    // import
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    // react
    'react/jsx-indent': ['warn', 2],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    // react-hooks
    'react-hooks/exhaustive-deps': 'error',
    // typescript-eslint
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // ! temporarily turned off for now
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
};
