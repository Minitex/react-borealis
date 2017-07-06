const webpack = require('webpack');
const {resolve} = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', ['es2015', { modules: false }], 'stage-0'],
          },
        },
      },
    ],
  },
  context: resolve('src'),
  entry: ['babel-polyfill', './react-borealis.js'],
  devtool: 'source-map',
  output: {
    path: resolve('dist'),
    filename: 'react-borealis-min.js',
    library: 'react-borealis',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};
