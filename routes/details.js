var express = require("express");
var request = require("request");
var router = express.Router();

/* GET details json. */
// Queries require: placeid
router.get('/', function(routerReq, routerRes, next) {

    var url = `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.GOOGLEMAPS_APIKEY}&placeid=${routerReq.query.placeid}`

    request(url, function (error, requestRes, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', requestRes && requestRes.statusCode); // Print the response status code if a response was received
      routerRes.setHeader('Content-Type', 'application/json');
      routerRes.send(body);
  });
});

module.exports = router;
