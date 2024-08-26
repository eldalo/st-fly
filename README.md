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

| Variable Name           | Description             | Default Value                                    | Required |
| ----------------------- | ----------------------- | ------------------------------------------------ | -------- |
| `NX_COINGECKO_API`      | Base URL Coin Gecko API | `https://api.coingecko.com/api/v3/coins/markets` | Yes      |
| `NX_COINGECKO_CURRENCY` | Currency Coin Gecko     | `usd`                                            | Yes      |

## Custom Component

[Button Component](https://github.com/eldalo/st-fly/tree/master/packages/ui/src/button)

## Responsive

[View Video](https://www.loom.com/share/0d9003c94dbc407488dd9a79785d1c6c?sid=9dcc0cec-8bab-4eed-89fd-7e6f0b529014)

## Error Handling

The Sonner library is implemented

```bash
npm install sonner
```

### Use

#### Success message

```bash
toast.success('Event has been created')
```

#### Error message

```bash
toast.error('Error creating event')
```

#### Alert message

```bash
toast.warning('Danger in event')
```

## Security Measures Report

### 1. Protection Against XSS Attacks

#### Implemented Measures:

- The DOMPurify library is used to sanitize any dynamic HTML or user-generated content that may be rendered in the application.
- All HTML insertions with `dangerouslySetInnerHTML` are protected by sanitizing the data before rendering.

#### Justification:

- XSS attacks can occur when dynamic content is injected into the application without proper validation. DOMPurify ensures that any malicious code is removed before being displayed in the DOM, mitigating the risks of XSS injections.

### 2. Input Validation and Sanitization

#### Implemented Measures:

- Yup is used to validate all user inputs on the frontend. Fields such as name, email, phone and description are validated to ensure they adhere to expected formats.
- Sanitization is enforced using functions like `.trim()` to remove unnecessary spaces and regular expressions to restrict allowed characters.

#### Justification:

- Validating and sanitizing user inputs is critical to prevent malicious data from entering the system. It ensures that only expected data is submitted, preventing vulnerabilities such as SQL injection and stored XSS.

### 3. Error Management

#### Implemented Measures:

- A global interceptor has been implemented to manage network errors in the application, ensuring proper handling of HTTP errors.
- A reusable error notification component provides clear messages to users when issues arise.

#### Justification:

- Proper error management ensures that the application behaves predictably in case of request failures or input validation errors. It prioritizes both user experience and system security.
