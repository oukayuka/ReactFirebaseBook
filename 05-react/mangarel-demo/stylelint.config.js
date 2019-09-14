const argv = require('yargs').argv;
const glob = argv['_'] && argv['_'][0];
const isJsxFile = glob && /.{jsx,tsx}/.test(glob);

if (isJsxFile) {
  module.exports = {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-styled-components',
      './node_modules/prettier-stylelint/config.js',
    ],
    plugins: ['stylelint-order'],
    processors: ['stylelint-processor-styled-components'],
    rules: {
      'declaration-empty-line-before': 'never',
      'indentation': 2,
      'no-missing-end-of-source-newline': null,
      'string-quotes': 'single',
      'order/properties-alphabetical-order': true
    }
  };
}

module.exports = {
  extends: [
		'stylelint-config-standard',
		'./node_modules/prettier-stylelint/config.js'
	],
  ignoreFiles: [
    '**/node_modules/**',
    'src/styles/**'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'declaration-empty-line-before': 'never',
    'indentation': 2,
    'no-missing-end-of-source-newline': null,
    'string-quotes': 'single',
    'order/properties-alphabetical-order': true
  },
};
