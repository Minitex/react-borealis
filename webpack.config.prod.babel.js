const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

let common = {
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
    }),
  ],
};

module.exports = merge(common  , {
  entry: './src/react-borealis.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-borealis-min.js',
    library: 'react-borealis',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
});
