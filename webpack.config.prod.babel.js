const { resolve } = require('path');

module.exports = {
  context: resolve('src'),
  entry: ['babel-polyfill', './react-borealis.js'],
  devtool: 'cheap-module-source-map',
  output: {
    path: resolve('dist'),
    filename: 'react-borealis-min.js',
    library: 'react-borealis',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};
