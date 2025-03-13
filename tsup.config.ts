import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/try-catch.ts'],
  splitting: false,
  sourcemap: true,
  format: 'esm',
  minify: true,
  dts: true,
  clean: true,
  target: 'es2015',
});
