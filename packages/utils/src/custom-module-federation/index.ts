import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import { ModuleFederationConfig } from '@nx/webpack';
import { withModuleFederation } from '@nx/react/module-federation';

import type { NxWebpackExecutionContext } from '@nx/webpack';
import type { Configuration } from 'webpack';

export const withCustomModuleFederation =
  async (configFederation: ModuleFederationConfig) =>
  async (config: Configuration, context: NxWebpackExecutionContext) => {
    const envs = Object.entries(process.env).reduce(
      (env: Record<string, string>, [key, value]) => {
        if (key.startsWith('NX')) {
          env[`process.env.${key}`] = JSON.stringify(value) ?? '';
        }
        return env;
      },
      {},
    );

    const federatedModules = await withModuleFederation(configFederation, {
      dts: false,
    });
    return merge(federatedModules(config, context), {
      plugins: [...(config.plugins ?? []), new webpack.DefinePlugin(envs)],
    });
  };
