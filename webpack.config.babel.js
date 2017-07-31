import merge from 'webpack-merge';

module.exports = function (env) {
  const config = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', ['es2015', { modules: false }], 'stage-0'],
            },
          },
        },
      ],
    },
  };
  return merge(config, require(`./webpack.config.${env}.babel.js`));
};

