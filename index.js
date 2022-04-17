module.exports = {
  extends: [
     'stylelint-config-standard-scss',
     'stylelint-config-css-modules'
  ],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  rules: {
    'selector-class-pattern': null,
  },
};
