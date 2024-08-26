import { composePlugins, withNx } from '@nx/webpack';
import { ModuleFederationConfig } from '@nx/webpack';
import { withReact } from '@nx/react';

import { withCustomModuleFederation } from '../../packages/utils/src';
import { remotes } from './module-federation-remotes';
import baseConfig from './module-federation.config';

const prodConfig: ModuleFederationConfig = {
  ...baseConfig,
  remotes,
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withCustomModuleFederation(prodConfig)
);
