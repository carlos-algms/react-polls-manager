'use strict';

const merge = require('webpack-merge');
const webpack = require('webpack');

const defaultConfig = require('./webpack.config');

module.exports = merge(defaultConfig, {

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]

});
