import { resolve } from 'path';

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
            plugins: [
              'transform-react-remove-prop-types',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      ReactDOM: 'preact-compat',
    },
  },
  externals: {
    react: 'react',
    'react-dom': 'ReactDOM',
  },
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
