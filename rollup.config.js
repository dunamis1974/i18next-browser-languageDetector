import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import { argv } from 'yargs';

const destFormat = argv.format || argv.f || 'iife';
const compress = argv.uglify;

const babelOptions = {
  exclude: 'node_modules/**',
  presets: ['es2015-rollup', 'stage-0'],
  babelrc: false
};

const dest = {
  amd: `dist/amd/i18nextBrowserLanguageDetector${compress ? '.min' : ''}.js`,
  umd: `dist/umd/i18nextBrowserLanguageDetector${compress ? '.min' : ''}.js`,
  iife: `dist/iife/i18nextBrowserLanguageDetector${compress ? '.min' : ''}.js`
}[destFormat];

export default {
  moduleName: 'i18nextBrowserLanguageDetector',
  entry: 'src/index.js',
  dest: dest,
  format: destFormat,
  plugins: [
    babel(babelOptions),
    nodeResolve({ jsnext: true })
  ].concat(compress ? uglify() : [])
};
