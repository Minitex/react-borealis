var webpack = require("webpack");
var path = require('path');
var merge = require('webpack-merge')
var TARGET = process.env.npm_lifecycle_event;
// e.g.: 
// npm run build
// (event == build)
// e.g. nmp run start (event -- start)
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var minimize = process.argv.indexOf('--minimize')
 
var common = {
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
          presets: ["react", "es2015", "stage-0"]
        }
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin("[name].css"),
      new webpack.HotModuleReplacementPlugin()
  ]
};

if (TARGET === 'build') {
  if (minimize > 0) {
    common.plugins.push(new webpack.optimize.UglifyJsPlugin());    
    var config = 
      {
        entry: './src/react-borealis.js',
        output: {
          path: path.join(__dirname, 'dist'),
          filename: 'react-borealis-min.js',
          library: "react-borealis",
          libraryTarget: 'umd',
          umdNamedDefine: true
        }
      }
  } else {
    var config = 
      {
        devtool: 'source-map',
        entry: './src/react-borealis.js',
        output: {
          path: path.join(__dirname, 'dist'),
          filename: 'react-borealis.js',
          library: "react-borealis",
          libraryTarget: 'umd',
          umdNamedDefine: true
        }
      }
  }
  module.exports = merge(common, config);
}


if (TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'source-map',
    entry: [
      'webpack-hot-middleware/client',
      './example/example.js'
    ],
    output: {
        path: path.join(__dirname, 'docs'),
        filename: "example.js"
    }
  });
}