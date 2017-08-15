var mongoose = require('mongoose');

var FavouritesSchema = new mongoose.Schema({
    name: String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Favourites", FavouritesSchema);