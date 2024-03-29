var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './js/main.js',
  output: {  path: path.resolve(__dirname, "js"),
             filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};