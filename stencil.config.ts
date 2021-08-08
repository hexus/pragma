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
      // docs directory files will be completely written
      // if we don't build them next to component source
      // https://github.com/ionic-team/stencil/issues/2108
      // https://github.com/ionic-team/stencil/issues/2198
      type: 'docs-readme',
      dir: 'src/stencil' // /components/<component>/readme.md
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
