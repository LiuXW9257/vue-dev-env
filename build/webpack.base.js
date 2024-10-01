const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseWebpackConfig = {
  entry: path.resolve(__dirname, '../src/main.js'),

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    clean: true
  },
  
  module: {

  },
  
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
}

module.exports = baseWebpackConfig;