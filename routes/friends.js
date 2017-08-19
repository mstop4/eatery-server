require("../schemas/database");
var express = require("express");
var router = express.Router();
Friend = require("../schemas/friendsSchema")
User = require("../schemas/userSchema");

//add friends, if someone add as a friend, both of them become friends
router.post("/add/:email_user/:email_friend", (req, res) => {
  getUser(req.params.email_user).then(user => {
    let friend = new Friend({
      'email': req.params.email_friend,
      'user_id': user._id,
    })
    friend.save((err,friend) => {
      let reverse = new Friend({
        'email': req.params.email_user,
        'user_id': friend._id, 
      })
      reverse.save((err,reverse) => {
        res.send("saved");
      })
    })
  })
})

//search for friends based on the typed input
//will return an array of friends
router.get("/search/:email", (req, res) => {
  getUsersLikeByEmail(req.params.email).then(users => {
    res.send(users);
  })
})

//receives an email and return all friends of that email
router.get("/list/:email", (req, res) => {
  getUser(req.params.email).then(user => {
    getUsersById(user._id).then(friends => {
      res.send(friends);
    })
  })
})

function getUser(email) {
  return User.findOne({ email: email }).exec();
}

function getUsersLikeByEmail(email) {
  return User.find({email: { $regex: '.*' + email + '.*' } }).exec();
}

function getUsersById(id) {
  return Friend.find({user_id:id}).exec();
}

module.exports = router;
