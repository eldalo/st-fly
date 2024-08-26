import { ModuleFederationConfig } from '@nx/webpack';

const coreLibraries = new Set([
  'react',
  'react-dom',
  'react-router-dom',
  'axios',
]);

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: ['users', 'tasks', 'reports'],
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }
    return false;
  },
};

export default config;
