var mongoose = require('mongoose');

var FriendsSchema = new mongoose.Schema({
    name: String,
    email: String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Friends", FriendsSchema);