const path = require('path');
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')

const devWebpackConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
    static: {
      directory: path.resolve(__dirname, '../dist')
    }
  }
}

module.exports = merge(baseWebpackConfig, devWebpackConfig)