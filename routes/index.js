const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use(session({secret: 'moist'}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var sess;

router.post('/facebook', function(req, res, next) {
  fb = req.body
  console.log(fb);
  sess=req.session;
  sess.cookie.email=fb.email;
  sess.cookie.name=fb.name;
  sess.cookie.fbId=fb.fbId;
  console.log('SESSION INFO:' ,sess )
  //BLAH BLAH BLAH REGISTER USER IN DB HERE
});

router.get('/logout', function(req, res, next){
  sess = null;
  console.log('LOGOUT')
});
module.exports = router;
