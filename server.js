const express = require('express');
const webpack = require('webpack');
const path = require('path');
const requireFromString = require('require-from-string');
const MemoryFS = require('memory-fs');

const serverConfig = require('./webpack.config.server');
const fs = new MemoryFS();

const app = express();
const serverCompiler = webpack(serverConfig);
serverCompiler.outputFileSystem = fs;

serverCompiler.run((err, stats) => {
  if (err) {
    console.log(err);
  }
  const contents = fs.readFileSync(path.resolve(serverConfig.output.path, 
    serverConfig.output.filename), 'utf8');
  const middleware = requireFromString(contents, serverConfig.output.filename);

  app.get('*', middleware.default);
  app.listen(3000);

  console.log('Server listening on port 3000');
});