const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const express = require('express');
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-Hot-middleware")
const webpackConfig = require('./webpack.config.js')


const fs = require('fs');

const config = require('./webpack.config.js');

const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost',
};
//
// fs.writeFile('src/testFs.js','function alertSomething(){ alert(1); }; alertSomething();', 'utf8', () => {
//
// })

// webpackDevServer.addDevServerEntrypoints(config, options);


// const compiler = webpack(config);


// const server = new webpackDevServer(compiler, options);
const server = express();
server.get('/index',(req, res) => {
   res.send('hello 5000')
});
//
// server.use(webpackDevMiddleware(compiler, {
//     noInfo: true, publicPath: webpackConfig.output.publicPath
// }));
// server.use(webpackHotMiddleware(compiler));
//


server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
});

