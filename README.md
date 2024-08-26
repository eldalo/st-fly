# Smart Talent Fly

## Overview

Smart Talent Fly monorepo for micro front-end architecture

## Table of Contents

- [Overview](#overview)
- [Workspace](#workspace)
- [Installation](#installation)
- [Concepts](#concepts)
- [Troubleshooting](#troubleshooting)
- [Run Project](#run-project)
- [Development Mode Configuration for Micro front-ends](#development-mode-configuration-for-microfrontends)
- [Environment variables](#environment-variables)

---

## Workspace

Monorepo for Smart Talent Fly Apps - workspace

- apps
  - host (main / shell)
  - tasks (micro-frontend)
  - reports (micro-frontend)
  - users (micro-frontend)

## Requirements

- NodeJS 20.x
- pnpm 9.x
- Nx 19.x

## Installation

```bash
npm install
```

## Concepts

- [Nx](https://nx.dev/)
- [Nx Plugin](https://nx.dev/nx-plugin)
- [NX Module Federation](https://nx.dev/concepts/module-federation/module-federation-and-nx)

## Troubleshooting

### Fix compilation error

```bash
nx reset
```

## Run Project

### Run project

```bash
npm run start
```

### Run project mode dev

```bash
npm run start:dev
```

### Run project, Open the host app in the browser

```bash
npm run start:dev:open
```

## Development Mode Configuration for Micro front-ends

To handle the development mode of a micro front-end and enable auto-updating, you need to configure the `"devRemotes"` property in the host's `project.json` file. This allows the micro front-ends to automatically update during development.

### Example

If you want the `host` micro front-end to have auto-updating, your `project.json` file should look like this in the serve options:

- `app/host/project.json`

```json
{
  "devRemotes": ["users"]
}
```

if have need the remote project to live reload update the `project.json` in remote project add the following configuration in serve options
ex: `app/users/project.json`

```json
{
  "liveReload": true
}
```

## Environment Variables

| Variable Name              | Description              | Default Value                                    | Required |
| -------------------------- | ------------------------ | ------------------------------------------------ | -------- |
| `NX_COINGECKO_API`         | Base URL Coin Gecko API  | `https://api.coingecko.com/api/v3/coins/markets` | Yes      |
| `NX_COINGECKO_CURRENCY`    | Currency Coin Gecko      |  `usd`                                           | Yes      |
