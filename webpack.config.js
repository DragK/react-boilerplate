const React = require('react');
const ReactDOM = require('react-dom');
const TypeScript = require('typescript');
const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filname: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.text$/, use: 'raw-loader'}
    ]
  }
}

module.exports = config;