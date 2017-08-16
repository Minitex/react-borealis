import { resolve } from 'path';

module.exports = {
  context: resolve('example'),
  entry: ['babel-polyfill', './example.js'],
  devtool: 'source-map',
  output: {
    path: resolve('dist'),
    filename: 'react-borealis.js',
    publicPath: '/dist/',
    pathinfo: true,
  },
};
