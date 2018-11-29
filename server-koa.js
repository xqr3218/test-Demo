/**
 * Created by xuqinrui on 2018/5/25.
 */
const express = require('express');
const Koa = require('koa');
const route = require('koa-route');
const serve = require('koa-static');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackDevServer = require('webpack-dev-server');
// const app = express();
const app = new Koa();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const server = new webpackDevMiddleware(compiler, options);

// const router = ctx => {
//
//     console.log(ctx.request);
// }
//
app.use(serve(path.join(__dirname)));
app.use(route.get('/index',(ctx) => {
    ctx.response.res.sendFile("index.html", {"root": '/'});
}));



// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});
//
// app.get('/*',function (req, res) {
//     res.sendFile("index.html", {"root": config.output.publicPath});
// });