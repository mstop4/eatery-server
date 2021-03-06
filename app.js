var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var index = require('./routes/index');
var users = require('./routes/users');
var places = require('./routes/places');
var favourite = require('./routes/favourite');
var details = require('./routes/details');
var friends = require('./routes/friends');
var facebook = require('./routes/facebook');
var rates = require('./routes/rates');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,  // some legacy browsers (IE11, various SmartTVs) choke on 204
  allowedHeaders: ['Content-Type']
}

app.use(cors(corsOptions));

app.use('/', index);
app.use('/users', users);
app.use('/places', places);
app.use('/favourite', favourite);
app.use('/details', details);
app.use('/friends', friends);
app.use('/facebook', facebook);
app.use('/rates', rates);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
