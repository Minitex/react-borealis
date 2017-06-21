const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

let common = {
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
};

module.exports = merge(common, {
  entry: './example/example.js',
  output: {
    filename: 'example.js',
  },
});
