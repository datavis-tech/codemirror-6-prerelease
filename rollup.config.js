import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  external: ['w3c-keyname', 'style-mod'],
  input: './codemirror.ts',
  output: {
    format: 'es',
    file: './dist/codemirror.js',
    sourcemap: false,
  },
  plugins: [
    nodeResolve(),
    typescript({
      check: false,
      tsconfigOverride: {
        compilerOptions: {
          lib: ['es5', 'es6', 'dom'],
          strict: false,
        },
        include: null,
      },
    }),
    commonjs(),
  ],
};
