import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'pragma',
  srcDir: "src/stencil",
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      dir: 'docs'
    }
  ],
  plugins: [
    sass()
  ]
};
