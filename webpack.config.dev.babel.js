const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'docs'),
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
  entry: './example/example.js',
  devtool: 'source-map',
  output: {
    filename: 'example.js',
  },
};