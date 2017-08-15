var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    password: String,
});

module.exports = mongoose.model("User", UserSchema);