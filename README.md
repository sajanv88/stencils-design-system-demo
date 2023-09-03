<div align="center">
  <h2 align="center"><strong>Stencil Design System Demo repo</strong></h2>
  <p align="center">
    UI Component Library for a Design System using Stencil.
  </p>

</div>

<br/>
<br/>

## Structure

This monorepo contains React project that work together with an integrated Design System using stencils.

### Packages

> Packages are reusable libraries available for packages and apps

| Package directory           | Description                                       |
| --------------------------- | ------------------------------------------------- |
| `packages/ui-stencil`       | Component library                                 |
| `packages/ui-stencil-react` | Official Wrapper that improves Stencil with React |

### Apps

> App can use all the available package

| App directory    | Description                                     |
| ---------------- | ----------------------------------------------- |
| `apps/app-react` | Test App that uses the ui-stencil-react library |

### Config

> Config are reusable eslint and typescript configurations

| Package directory | Description                           |
| ----------------- | ------------------------------------- |
| `config/`         | Shared configuration for all packages |

### Tools

> Tools to generate Components, fetch Tokens or update dependencies

| App directory | Description   |
| ------------- | ------------- |
| `tools/`      | CLI Tool that |

<br/>

## Development

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Make sure you have the LTS version of [Node](https://nodejs.dev/) (18.7) installed in your machine. We recommend to use [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm).

This monorepository uses Turborepo to manage dependencies and scripts. The first step is to install the local node dependencies:

```sh
pnpm install && pnpm run dev

```
