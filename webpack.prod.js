const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, // Extract css into files
            "css-loader", // css => js
            "sass-loader"] // scss => css
        }
    ]
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
});