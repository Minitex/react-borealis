const webpack = require('webpack');
const {resolve} = require('path');

module.exports = {
  devServer: {
    hot: true,
    contentBase: resolve('docs'),
    publicPath: '/',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  context: resolve('example'),
  entry: './example.js',
  devtool: 'source-map',
  output: {
    filename: 'example.js',
  },
};