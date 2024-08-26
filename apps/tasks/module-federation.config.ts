import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'tasks',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
