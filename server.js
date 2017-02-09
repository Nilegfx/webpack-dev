const path = require('path');
const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const express = require('express');
const app = express();

console.log(webpackConfig);

if(process.env.NODE_ENV ==='development') {
	var compiler = webpack(webpackConfig);
	devServer(compiler, {
	  contentBase: [path.resolve(), path.resolve('dist', 'assets')],
	  compress: true,
	  port: 9000,
	  historyApiFallback: {
  rewrites: [
    { from: /^\/nile$/, to: '/landing.html' },
  ]
}
  })
}else {
	app.get(['/assets/*'], express.static('dist'))
	app.get(['/nile*', '/'], (req, res) => {
		res.sendFile(path.resolve('dist', 'landing.html'))
	})
}

app.listen(9000, () => {console.log('open http://localhost:9000')});


