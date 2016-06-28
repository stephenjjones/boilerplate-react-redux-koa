var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    root: path.join(__dirname, 'client/src')
  },
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: __dirname + '/client/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname)
    }]
  }
}
