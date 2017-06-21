const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

let common = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'react-hot-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0'],
          },
        },
      },
      {
        test: /\.css$/,
        use: 'css-loader',
      },
      {
        test: /\.less$/,
        use: 'css-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

common.plugins.push(new webpack.optimize.UglifyJsPlugin());
const minConfig = merge(common  , {
  entry: './src/react-borealis.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-borealis-min.js',
    library: 'react-borealis',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
});
const mapConfig = merge(common, {
  devtool: 'source-map',
  entry: './src/react-borealis.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-borealis.js',
    library: 'react-borealis',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
});

const exampleConfig = merge(common, {
  devtool: 'source-map',
  entry: './example/example.js',
  output: {
    filename: 'example.js',
  },
});

module.exports = [minConfig, mapConfig, exampleConfig]