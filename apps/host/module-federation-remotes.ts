/**
 * @file module-federation-remotes.ts
 * @description Configuration file for defining remote modules in Webpack's Module Federation.
 *
 * Exports an array remote module names to their respective URLs.
 * These remote modules are used in a Webpack Module Federation setup, allowing the main application
 * to dynamically load and use code from other applications (micro-frontends) at runtime.
 *
 * @module module-federation-remotes
 */

import { Remotes } from '@nx/webpack';

const URL_SUFFIX = process.env.MF_URL_SUFFIX;

export const remotes: Remotes = [
  ['users', `https://users.${URL_SUFFIX}/`],
  ['tasks', `https://tasks.${URL_SUFFIX}/`],
  ['reports', `https://reports.${URL_SUFFIX}/`],
];
