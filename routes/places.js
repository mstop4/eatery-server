require("../schemas/database");
var express = require("express");
var request = require("request");
var router = express.Router();
Favourite = require("../schemas/favouritesSchema");
User = require("../schemas/userSchema");

/* GET map json. */
router.get("/", function(req, res, next) {
  var url =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.6446318,-79.3950034&type=restaurant&radius=150&key=AIzaSyAlibWfdCwp1PWyXZtVVNlVd_BfU39Oj8o";

  request(url, function(error, response, body) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    res.setHeader("Content-Type", "application/json");
    res.send(body);
  });
});

//will add the favourite place and user email to the table, if success, will send 'Saved' as response
router.post("/favourite/:user_email/:restaurant_name", (req, res) => {
  let promise = new Promise((resolve, reject) => {
    resolve(getUser(req.params.user_email));
  })
  promise.then((user) => {
    let place = new Favourite({
      name: req.params.restaurant_name,
      user: user._id
    });
    place.save();
    res.send("Saved");
  }) 
});

//will check if the place were already favourited by the user, return true if has already and false if not
router.get("/favourite/liked/:user_email/:restaurant_name", (req, res) => {
  let promise = new Promise(function(resolve, reject) {
    resolve(getUser(req.params.user_email))
  })
  promise.then((user) => {
    console.log(user);
    promise = new Promise((resolve,reject) => {
      resolve(getFavourite(
        req.params.restaurant_name,
        req.params.user_email
      ));
      promise.then((favourite) => {
        if(favourite) {
          res.send('true')
        } else {
          res.send('false')
        }
      })
    })
  })
});

//will remove the favourite from the user, if success you have 'deleted as response'
router.delete("/favourite/delete/:user_email/:restaurant_name", (req, res) => {
  Favourite.remove({'email':req.params.user_email,'name':req.params.restaurant_name}, (err) => {
    if(!err) {
      res.send('deleted')
    } else {
      console.log(err);
    }
  })
});

function getUser(email) {
  return User.findOne({ email: email }, (err,user) => {
    if(err) {
      console.log(err);
    }
    return user
  })


}

function getFavourite(name, email) {
  Favourite.find({ name: name, email: email }, function(err, favourite) {
    if(err) {
      console.log(err);
    } else {
      return favourite;
    }
  });
}

module.exports = router;
