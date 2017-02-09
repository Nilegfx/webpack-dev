var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('dist', 'assets'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
  	new CopyWebpackPlugin([
  		{ from: '*.html', to: '..'}
  		])
  ]
};