import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'pragma',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    }
  ]
};
