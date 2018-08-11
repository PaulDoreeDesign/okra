const _ = require('lodash');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const envVariables = {}; // for now..

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': _.assign({}, {
        NODE_ENV: 'production',
      }, envVariables),
    }),
  ],
});

