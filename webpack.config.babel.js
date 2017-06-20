const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
var TARGET = process.env.npm_lifecycle_event;

let common = {
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'react-hot-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

if (TARGET !== 'start') {
  common.plugins.push(new webpack.optimize.UglifyJsPlugin());
  const minConfig = merge(common, {
    entry: './src/react-borealis.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'react-borealis-min.js',
      library: 'ReactBorealis',
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
      library: 'ReactBorealis',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
  });
  module.exports = [minConfig, mapConfig]
}

if (TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'source-map',
    entry: './example/example.js',
    output: {
      path: path.join(__dirname, 'docs'),
      filename: 'example.js',
    },
  });
}