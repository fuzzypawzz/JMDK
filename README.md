[![Netlify Status](https://api.netlify.com/api/v1/badges/f0f6e118-d0e4-470c-a328-d1a3c6aaca3f/deploy-status?branch=main)](https://app.netlify.com/sites/jmdk/deploys)

# JMDK - jannikmaag.dk

My personal website.

## Directory

The source code is found in the src directory.

### UI Architecture:

This app is using the Vue.js framework as rendering mechanism of the UI.

The UI layer is built using the MVP (Model-View-Presenter) design pattern, which means that logic and state management is written in plain testable JavaScript objects which are kept separate from the views.

### Layers

The code is separated into layers inspired by an onion architecture.

> This applications code is separated into layers which is reflected by the folders in src.
> As of now the application is quite small, meaning that there is (currently) no need for
> a data store, services or a logic layer.

- JMDK.Core
- JMDK.UI
- JMDK.Logic (when needed)
- JMDK.Store (when needed)
- JMDK.Services (when needed)

### Inversion Of Control

Dependencies are managed with an IOC container.

The configuration can be found in the Core layer.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Storybook with Hot-Reload

```sh
npm run storybook
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Recommended setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize vite configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
