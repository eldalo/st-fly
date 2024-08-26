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

export const remotes: Remotes = [
  ['reports', `https://st-fly-reports.vercel.app/`],
  ['tasks', `https://st-fly-tasks.vercel.app/`],
  ['users', `https://st-fly.vercel.app/`],
];
