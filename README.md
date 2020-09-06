# Pragma

Declarative form builder and processor.

## Dependencies

```
npm i && npm i pragma
```

## Build

### Pragma

Build and watch the Pragma runtime and example project.

```
webpack -w
```

### Pragma components

Build and watch Pragma's Stencil components.

```
cd pragma
npx stencil build --watch
```

### TODO

#### Bundle runtime separately

The Pragma runtime (primarily `FormProcessor`) is only bundled as a side effect of the example project.

Bundle it separately from the example project after clarifying the shape of Pragma's public API.

#### Bundle components with Webpack

Stencil currently [only bundles using Rollup](https://stenciljs.com/docs/module-bundling).

With better [Public Compiler APIs](https://stenciljs.com/blog/stencil-roadmap-fall-2019#public-compiler-apis) it should
instead be possible to compile Stencil components and bundle them as part of Webpack, instead of needing to run two
watches. For now, the two watches are seemingly necessary.

**Update**: The [Stencil Core Compiler API](https://stenciljs.com/docs/compiler-api) is now documented, but there does
not yet appear to be a Webpack plugin that utilises it.
