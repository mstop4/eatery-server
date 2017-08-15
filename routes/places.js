var express = require('express');
var request = require('request');
var router = express.Router();

/* GET map json. */
router.get('/', function(req, res, next) {

  var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.644359,-79.3951126&type=restaurant&radius=200&key=AIzaSyAlibWfdCwp1PWyXZtVVNlVd_BfU39Oj8o"

  console.dir(req)

  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    response.setHeader('Content-Type', 'application/json');
    response.send(body);
    });
});

module.exports = router;
