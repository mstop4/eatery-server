const express = require('express');
const request = require('request');
const router = express.Router();
const ig = require('instagram-node').instagram(); 


// TOKEN for development testing
ig.use({
  access_token: process.env.ACCESS_TOKEN
});

ig.use({ 
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
});

router.get('/', (req, res, next) => {

  ig.tag('tag', (err, result, remaining, limit) => { 
    console.log(result);
    console.log(remaining);
    console.log(limit);
    console.log(err);
  });

});

/* GET map json. */
// router.get('/', function(req, res, next) {

//   const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.6446318,-79.3950034&type=restaurant&radius=150&key=AIzaSyAlibWfdCwp1PWyXZtVVNlVd_BfU39Oj8o"

//   request(url, function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     res.setHeader('Content-Type', 'application/json');
//     res.send(body);
//     });
// });

module.exports = router;


