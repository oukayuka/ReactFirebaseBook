module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'node': true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/standard',
  ],
  globals: {
    'Atomics': 'readonly',
    'cy': 'readonly',
    'Cypress': 'readonly',
    'SharedArrayBuffer': 'readonly',
    '__DEV__': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jest',
    'prefer-arrow',
    'prettier',
  ],
  root: true,
  rules: {
    // eslint official
    'linebreak-style': ['error', 'unix'],
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-continue': 'off',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'require-yield': 'error',
    'semi': ['error', 'always'],

    // @typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-interface': 'off',

    // airbnb
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    // prefer-arrow
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        'disallowPrototype': true,
        'singleReturnOnly': true,
        'classPropertiesAllowed': false,
      },
    ],


    // import
    'import/extensions': [
      'error',
      'always',
      {
        'js': 'never',
        'ts': 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '.storybook/**',
          'stories/**',
          '**/*/*.story.*',
          '**/*/*.stories.*',
          '**/__specs__/**',
          '**/*/*.spec.*',
          '**/__tests__/**',
          '**/*/*.test.*',
          'src/setupTests.*',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.ts'],
        'paths': ['src'],
      },
    },
  },
};
