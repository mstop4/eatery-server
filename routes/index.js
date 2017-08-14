var express = require('express');
var router = express.Router();
var accessToken = '248360853.1677ed0.32d2299eea164bcdac0806727af9ac0d';
var InstagramAPI = require('instagram-api');
var instagramAPI = new InstagramAPI(accessToken);


/* GET home page. */
router.get('/', function(req, res, next) {

  // instagramAPI.userSelf().then(function(result) {
  //   console.log(result.data); // user info 
  //   console.log(result.limit); // api limit 
  //   console.log(result.remaining); // api request remaining 
  //   res.render('index', { title: 'Instagram Photos'});
  // }, function(err){
  //   console.log(err); // error info 
  // });

  

  instagramAPI.getMediasByTag('foodporn').then((result) => {
    console.log(result.data);
    console.log(result.limit);
    console.log(result.remaining)
    res.render('index', { title: 'Instagram Photos'});
  }, err => {
    console.log(err);
  });

  res.render('index', { title: 'Express' });
});


module.exports = router;
