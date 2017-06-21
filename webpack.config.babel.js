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
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    })
  ],
};

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

const exampleConfig = merge(common, {
  entry: './example/example.js',
  output: {
    filename: 'example.js',
  },
});

module.exports = [minConfig, exampleConfig]