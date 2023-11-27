---
title: Linter
outline: deep
badges:
  - src: https://img.shields.io/npm/dw/oxlint
    alt: npm
  - src: https://img.shields.io/github/stars/oxc-project/oxc
    alt: GitHub Repo stars
---

<AppBadgeList />

# oxlint

## Features

- Runs 50-100x faster than ESLint, and scales with the number of CPU cores ([Benchmark](https://github.com/oxc-project/bench-javascript-linter))
- No configuration required
- Convention over configuration
- Reports errors and useless code by default
- Supports [.eslintignore](https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file)
- Supports [ESLint comment disabling](https://eslint.org/docs/latest/use/configure/rules#disabling-rules)

## Adoptions

- A 5M LOC typescript codebase previously running ESLint parallelized across 48 workers in CI taking 75 mins (12m wall time), it is now 8 seconds on a single worker. ([Source](https://twitter.com/boshen_c/status/1714827365136929029))

## Installation

Install [oxlint](https://www.npmjs.com/package/oxlint):

::: code-group

```sh [npm]
$ npm add -D oxlint
```

```sh [pnpm]
$ pnpm add -D oxlint
```

```sh [yarn]
$ yarn add -D oxlint
```

```sh [bun]
$ bun add -D oxlint
```

:::

You can also run oxlint directly:

::: code-group

```sh [npm]
$ npx oxlint@latest
```

```sh [pnpm]
$ pnpm dlx oxlint@latest
```

```sh [yarn]
$ yarn dlx oxlint@latest
```

```sh [bun]
$ bunx oxlint@latest
```

```sh [deno]
$ deno run oxlint@latest
```

:::

You can download the binary files from [the latest GitHub releases](https://github.com/oxc-project/oxc/releases/latest).

## Integration

### IDEs

#### VSCode Extension

You can download [the official VSCode extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode).

#### Vim / Nvim (coc)

Add the following config to `coc-settings.json`:

```javascript
{
  "languageserver": {
    "oxc": {
      "command": "oxc_vscode",
      "filetypes": [
        "typescript",
        "javascript"
      ],
      "rootPatterns": [
        ".git"
      ]
    }
  }
}
```

### Continuous Integration

It is recommended to run `oxlint` before `eslint` for faster feedback loops,
since `oxlint` only takes a few seconds to run.

#### GitHub Actions

```yaml
jobs:
  oxlint:
    name: Lint JS
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npx --yes oxlint@latest
```

### Nix

Check [nixpkgs repository](https://github.com/NixOS/nixpkgs/blob/master/pkgs/development/tools/oxlint/default.nix) for more detail.

## Commands

- `npx oxlint@latest --rules` shows the list of rules
- `npx oxlint@latest --help` shows usage instructions

  ```
  Usage: oxlint [-A=NAME | -D=NAME]... [--fix] [PATH]...

  Allowing / Denying Multiple Lints
    For example `-D correctness -A no-debugger` or `-A all -D no-debugger`.
    The default category is "-D correctness".
    Use "--rules" for rule names.
    Use "--help --help" for rule categories.
      -A, --allow=NAME          Allow the rule or category (suppress the lint)
      -D, --deny=NAME           Deny the rule or category (emit an error)

  Enable Plugins
          --import-plugin       Enable the experimental import plugin and detect ESM problems
          --jest-plugin         Enable the Jest plugin and detect test problems
          --jsx-a11y-plugin     Enable the JSX-a11y plugin and detect accessibility problems

  Available positional items:
      PATH                      Single file, single path or list of paths

  Available options:
      -h, --help                Prints help information
  ```

## System Requirements

`oxlint` is built for the following systems:

- darwin-arm64
- darwin-x64
- linux-arm64
- linux-x64
- win32-arm64
- win32-x64
