require("../schemas/database");
var express = require("express");
var router = express.Router();
Favourite = require("../schemas/favouritesSchema");
User = require("../schemas/userSchema");

//will add the favourite place and user email to the table, if success, will send 'Saved' as response
router.post("/:user_email/:place_id", (req, res) => {
  getUser(req.params.user_email).then(user => {
    getFavourite(req.params.user_email, req.params.place_id).then(favourite => {
    console.log(favourite);
      if (favourite == null) {
        let place = new Favourite({
          place_id: req.params.place_id,
          user_id: user._id,
          email: req.params.user_email
        });
        place.save();
        res.send("Saved");
      } else {
        res.send("Exists");
      }
    });
  });
});

//will check if the place were already favourited by the user, return true if has already and false if not
router.get("/:user_email/:place_id", (req, res) => {
  getUser(req.params.user_email).then(user => {
    getFavourite(req.params.user_email, req.params.place_id).then(favourite => {
      if (favourite != null) {
        console.log("found");
        res.send(favourite);
      } else {
        console.log("not found");
        res.send("false");
      }
    });
  });
});

//will list all favourites from the user
router.get("/list/:user_email", (req, res) => {
  getUser(req.params.user_email).then(user => {
    if (user != null) {
      getFavouritesList(user._id).then(favourites => {
        res.send(favourites);
      });
    }
  });
});

//will remove the favourite from the user, if success you have 'deleted as response'
router.delete("/delete/:user_email/:place_id", (req, res) => {
  getUser(req.params.user_email).then(user => {
    Favourite.findOneAndRemove({
      email: req.params.user_email,
      place_id: req.params.place_id
    }).exec(() => {
      res.send("deleted");
    });
  });
});

function getUser(email) {
  return User.findOne({ email: email }).exec();
}

function getFavourite(email, place_id) {
  return Favourite.findOne({ email: email, place_id: place_id }).exec();
}

function getFavouritesList(id) {
  return Favourite.find({ user_id: id }).populate("user_id").exec();
}

module.exports = router;
