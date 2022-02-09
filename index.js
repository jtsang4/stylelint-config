module.exports = {
  extends: 'stylelint-config-standard-scss',
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'selector-class-pattern': null,
  },
};
