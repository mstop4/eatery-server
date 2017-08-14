
var express = require('express');
var router = express.Router();
var accessToken = '23612221.3fcb46b.348431486f3a4fb85081d5242db9ca1c';
var InstagramAPI = require('instagram-api');
var instagramAPI = new InstagramAPI(accessToken);

/* GET home page. */
router.get('/', function(req, res, next) {

  instagramAPI.userSelf().then(function(result) {
    console.log(result.data); // user info 
    console.log(result.limit); // api limit 
    console.log(result.remaining) // api request remaining 
    res.render('index', { title: 'Instagram Photos'});
  }, function(err){
    console.log(err); // error info 
  });
  
  res.render('index', { title: 'Express' });
});


// GET #foodporn and display on index
// router .get()



module.exports = router;