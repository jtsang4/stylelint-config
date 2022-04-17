# @jtsang/stylelint-config

[![npm](https://img.shields.io/npm/v/@jtsang/stylelint-config?color=a1b858&label=)](https://npmjs.com/package/@jtsang/stylelint-config)

Opinionated stylelint configs.


## Usage

### Install

```bash
pnpm add -D eslint @jtsang/stylelint-config
```

### Config `.stylelintrc`

```json
{
  "extends": ["@jtsang/stylelint-config"]
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  "stylelint.validate": ["css", "scss", "less"],
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```

## License

MIT
