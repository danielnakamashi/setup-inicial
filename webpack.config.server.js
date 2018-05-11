const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  context: path.resolve('./src'),
  entry: './server.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'server.js',
    publicPath: '/dist/',
    library: 'app',
    libraryTarget: 'commonjs2',
  },
  mode: 'development',
  externals: [nodeExternals()],
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
                targets: 'node',
              }],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
};