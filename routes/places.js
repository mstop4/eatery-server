var express = require('express');
var request = require('request');
var router = express.Router();

/* GET map json. */
router.get('/', function(req, res, next) {

  var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.7993947,-79.1581265&type=restaurant&radius=1000&key=AIzaSyAlibWfdCwp1PWyXZtVVNlVd_BfU39Oj8o"

  request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.setHeader('Content-Type', 'application/json');
    res.send(body);
    });
});

module.exports = router;
