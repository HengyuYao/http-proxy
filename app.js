const { createProxyMiddleware } = require('http-proxy-middleware');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/website/**', function(req, res, next) {
  res.sendFile( path.join(__dirname, '/public') + "/" + "index.html" )
});
// app.get(/.*/,function(req,res){
//   res.sendFile(__dirname+'../public/')})

app.use('/', createProxyMiddleware({
  // 代理跨域目标接口
  target: "http://www.songshanlab.com",
  changeOrigin: true,
  // preserveHeaderKeyCase: true,
  pathFilter: ['!/front/article/findFrontHomeMapList'],
  proxyTimeout: 60000,
  timeout: 60000,
  // 修改响应信息中的 cookie 域名
  cookieDomainRewrite: "http://www.songshanlab.com", // 可以为 false，表示不修改
  hostRewrite: "www.songshanlab.com",

  on: {
  proxyReq: function(proxyReq, req, res) {
    proxyReq.setHeader('Connection', 'keep-alive');
  },
  proxyRes: function(proxyRes, req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1");
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }
  },
  
  //  autoRewrite: "http://www.songshanlab.com"


}));
app.use('/front/article/findFrontHomeMapList', usersRouter);

// app.use('/', express.static(path.join(__dirname, './public/website')));
// app.use('/assets/*', express.static(path.join(__dirname,'./public/website/assets')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
