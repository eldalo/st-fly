import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'users',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
