const path = require('path');

module.exports = {
  target: 'web',
  context: path.resolve('./src'),
  entry: './index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'client.js',
    publicPath: '/dist/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|dist/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  browsers: null,
                },
              }],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
};
