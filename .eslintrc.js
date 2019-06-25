module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 'off',
    'indent': [0, 'tab'],
    'no-tabs': 0,
    'skipBlankLines': true,
    'no-trailing-spaces': [1, { 'skipBlankLines': true }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
