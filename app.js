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
var feed = require('./routes/feed')

var app = express();
var api = require('instagram-node').instagram();

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
app.use('/feed', feed);

// ACCESS_TOKEN for development testing
api.use({
  access_token: process.env.ACCESS_TOKEN
});

// CLIENT ID AND CLIENT_SECRET for development testing
api.use({ 
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
});

const redirect_uri = 'http://localhost:3000/feed';

exports.authorize_user = (req, res) => {
  res.redirect(api.get_authorization_url(redirect_uri, { scope: ['public_content'], state: 'a state' }));
};

exports.handleauth = (req, res) => {
  api.authorize_user(req.query.code, redirect_uri, (err, result) => {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
};

// This is where you would initially send users to authorize
app.get('/authorize_user', exports.authorize_user);
// This is your redirect URI
app.get('/handleauth', exports.handleauth);


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
