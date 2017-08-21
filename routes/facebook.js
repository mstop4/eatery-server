require("../schemas/database");
const express = require('express');
const router = express.Router();
const session = require('express-session');
User = require("../schemas/userSchema");



function getUser(email) {
  return User.findOne({ email: email }).exec();
}

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
});

//localhost:3002/facebook
router.post('/:newusername/', function(req, res, next) {
  let name = req.body.name;
  let email = req.params.newuseremail;
  let picture = req.body.picture;
  console.log(req.body);
  getUser(email).then(user => {
    if(user == null) {
      let newuser = new User({
        name: name,
        email: email,
        picture: picture
      });
      newuser.save();
      res.send("Saved");
    }
  });
});


module.exports = router;
