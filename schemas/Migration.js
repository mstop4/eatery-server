require("./database");

var User = require('./userSchema'),
    Friend = require('./friendsSchema'),
    Favourite = require('./favouritesSchema')


var victor = new User({
    name: "Victor",
    email: "vmfesta@gmail.com",
    password: "test"
});

var john = new User({
    name: "John",
    email: "jpftolentino@gmail.com",
    pass: "test"
});

var john = new Friend({
    user_id: victor._id,
    name: "John",
    email: "jpftolentino@gmail.com"    
})

victor.save();

john.save();

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