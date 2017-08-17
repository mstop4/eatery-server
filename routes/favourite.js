require("../schemas/database");
var express = require("express");
var router = express.Router();
Favourite = require("../schemas/favouritesSchema");
User = require("../schemas/userSchema");

//will add the favourite place and user email to the table, if success, will send 'Saved' as response
router.post("/like/:user_email/:restaurant_name", (req, res) => {
  getUser(req.params.user_email).then(user => {
    let place = new Favourite({
      name: req.params.restaurant_name,
      user_id: user._id
    });
    place.save();
    res.send("Saved");
  });
});

//will check if the place were already favourited by the user, return true if has already and false if not
router.get("/liked/:user_email/:restaurant_name", (req, res) => {
  getUser(req.params.user_email).then(user => {
    getFavourite(req.params.restaurant_name, user._id).then(favourite => {
      console.log(favourite);
      if (favourite != null) {
        res.send("true");
      } else {
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
router.delete("/delete/:user_email/:restaurant_name", (req, res) => {
  getUser(req.params.user_email).then(user => {
    Favourite.findOneAndRemove({
      user_id: user._id,
      name: req.params.restaurant_name
    }).exec(() => {
      res.send("deleted");
    });
  });
});

function getUser(email) {
  return User.findOne({ email: email }).exec();
}

function getFavourite(name, id) {
  return Favourite.findOne({ name: name, user_id: id })
    .populate("user_id")
    .exec();
}

function getFavouritesList(id) {
  return Favourite.find({ user_id: id }).populate("user_id").exec();
}

router.get("/aaa", (req, res) => {});

module.exports = router;
