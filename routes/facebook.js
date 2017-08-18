const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use(session({secret: 'moist'}));

var sess;

router.get('/', function(req, res, next) {
  fb = req.body
  console.log(fb);
  sess=req.session;
  sess.cookie.email=fb.email;
  sess.cookie.name=fb.name;
  sess.cookie.fbId=fb.fbId;
  console.log('SESSION INFO:' ,sess )
  console.log(req);
  //BLAH BLAH BLAH REGISTER USER IN DB HERE
});

//localhost:3002/facebook
router.post('/:someshit/', function(req, res, next) {
  var shit = req.params.someshit;
  console.log(shit);
  // fb = req.body
  // console.log(fb);
  // sess=req.session;
  // sess.cookie.email=fb.email;
  // sess.cookie.name=fb.name;
  // sess.cookie.fbId=fb.fbId;
  // console.log('SESSION INFO:' ,sess )
  // //BLAH BLAH BLAH REGISTER USER IN DB HERE
  // res.redirect('/places');
});

module.exports = router;
