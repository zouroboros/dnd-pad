import sveltePreprocess from 'svelte-preprocess';

export default {
    // svelte options
    extensions: ['.svelte'],
    compilerOptions: {},
    preprocess: [sveltePreprocess({ sass: true })],
    onwarn: (warning, handler) => handler(warning),
    // plugin options
    vitePlugin: {
      exclude: [],
      // experimental options
      experimental: {}
    }
  };