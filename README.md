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
  - host (main)
  - auth (micro-frontend)

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

### Run project and open the host app in the browser

```bash
npm run start:open
```

### Run project and update open api documentation

```bash
npm run start:dev
```

### Run project, Open the host app in the browser and update open api documentation

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
  "devRemotes": ["auth"]
}
```

if have need the remote project to live reload update the `project.json` in remote project add the following configuration in serve options
ex: `app/auth/project.json`

```json
{
  "liveReload": true
}
```

## Environment Variables

| Variable Name              | Description                                                     | Default Value                    | Required | Example Value                    |
| -------------------------- | --------------------------------------------------------------- | -------------------------------- | -------- | -------------------------------- |
| `MF_URL_SUFFIX`            | Base URL suffix for microfrontends for the selected environment | None                             | Yes      | `dev.example.com`                |
| `NX_GOOGLE_AUTH_CLIENT_ID` | Google OAuth client ID.                                         | None                             | Yes      | `your-google-auth-client-id`     |
| `NX_OPEN_API_URL`          | URL for the Open API documentation.                             | `http://127.0.0.1:3001/api-json` | No       | `http://127.0.0.1:3001/api-json` |
| `NX_API_BASE_URL`          | Base URL for the API.                                           | `http://127.0.0.1:3001/`         | No       | `http://127.0.0.1:3001/`         |
