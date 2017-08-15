require("./database");

var User = require('./userSchema'),
    Friend = require('./friendsSchema'),
    Favourite = require('./favouritesSchema')


var victor = new User({
    name: "Victor"
});

victor.save();

var john = new Friend({
    name: "John",
    user_id: victor._id,
})

john.save();

var pizzaiolo = new Favourite({
    name: "Pizzaiolo",
    user_id: victor._id,
})

pizzaiolo.save();

User.find({}, function(err, docs) {
    console.log(docs);
})

Friend.find({}, function(err, docs) {
    console.log(docs);
})

Favourite.find({}, function(err, docs) {
    console.log(docs);
})