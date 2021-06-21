const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    publicPath: '/',
    contentBase: './public',
    watchContentBase: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
});