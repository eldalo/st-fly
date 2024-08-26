import { ModuleFederationConfig, composePlugins, withNx } from '@nx/webpack';
import { withCustomModuleFederation } from '@st-fly/utils';

import baseConfig from './module-federation.config';
import { withReact } from '@nx/react';

const config: ModuleFederationConfig = {
  ...baseConfig,
};

export default composePlugins(
  withNx(),
  withReact(),
  withCustomModuleFederation(config)
);
