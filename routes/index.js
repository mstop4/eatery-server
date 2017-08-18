const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use(session({secret: 'moist'}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/logout', function(req, res, next){
  sess = null;
  console.log('LOGOUT')
});
module.exports = router;
