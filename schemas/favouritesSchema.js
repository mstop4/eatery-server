var mongoose = require('mongoose');

var FavouritesSchema = new mongoose.Schema({
    place_id: String,
    email: String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Favourites", FavouritesSchema);