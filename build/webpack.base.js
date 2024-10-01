const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const baseWebpackConfig = {
  entry: path.resolve(__dirname, '../src/main.js'),

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    clean: true
  },
  
  module: {
    rules: [
      {
        test: /\.vue$/i,
        use: ['vue-loader']
      },
      {
        test: /\.css$/i,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new VueLoaderPlugin()
  ]
}

module.exports = baseWebpackConfig;