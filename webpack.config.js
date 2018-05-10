const path = require('path');

module.exports = {
  context: path.resolve('./src'),
  entry: './index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
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
            ],
          },
        },
      },
    ],
  },
};
