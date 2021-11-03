module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'plugin:css-modules/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],

  plugins: ['flowtype', 'react', 'css-modules', 'prettier'],

  globals: {
    __DEV__: true,
  },

  env: {
    browser: true,
  },

  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],
    'no-shadow': ['warn', { builtinGlobals: false, hoist: 'never', allow: [] }],
    curly: ['error', 'all'],
    'jsx-a11y/no-autofocus': [
      'warn',
      {
        ignoreNonDOM: true,
      },
    ],

    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'htmlFor',
      },
    ],

    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',

    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'off',

    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier#options
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
