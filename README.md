# Pragma

Declarative form builder and state processor.

> :warning: This library is in **early development**.

## [Documentation](docs)

[Documentation](docs) will be gradual as the nature of the project solidifies.

## Build

Install development dependencies:

```bash
$ npm i
```

Build the Pragma runtime, example project and Stencil components:

```bash
$ npm run build
```

Build and watch for changes:

```bash
$ npm run watch
```

## TODO

### Bundle runtime separately

The Pragma runtime (primarily `FormProcessor`) is only bundled as a side effect of the example project.

Bundle it separately from the example project after clarifying the shape of Pragma's public API.

### Bundle components with Webpack

Stencil currently [only bundles using Rollup](https://stenciljs.com/docs/module-bundling).

With better [Public Compiler APIs](https://stenciljs.com/blog/stencil-roadmap-fall-2019#public-compiler-apis) it should
instead be possible to compile Stencil components and bundle them as part of Webpack, instead of needing to run two
watches. For now, the two watches are seemingly necessary.

**Update**: The [Stencil Core Compiler API](https://stenciljs.com/docs/compiler-api) is now documented, but there does
not yet appear to be a Webpack plugin that utilises it.

### Experiment with extending built-in elements

Web components can extend built-in HTML elements to inherit functionality and usability.

Stencil doesn't currently support this in any way, but a keen-eyed developer has found a workaround:
- https://github.com/ionic-team/stencil/issues/1382#issuecomment-833095324

Try this out and see if the boilerplate repetition in the Pragma components can be reduced.

**Note:** This approach doesn't currently include form participation, but the same comment will be updated when the
developer gets around to it.

### Safer concurrent watches

Consider using [Concurrently](https://github.com/kimmobrunfeldt/concurrently) for the concurrent Webpack & Stencil
watches. The watch script is currently relying on bash's `&`.
