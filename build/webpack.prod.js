const { merge } = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base')

const prodWebpackConfig = {
  mode: 'production'
}

module.exports = merge(baseWebpackConfig, prodWebpackConfig)