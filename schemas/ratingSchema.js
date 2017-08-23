var mongoose = require('mongoose');

var RatingSchema = new mongoose.Schema({
    price: Number,
    quality: Number,
    portion: Number,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    place_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    }
});

module.exports = mongoose.model("Ratings", RatingSchema);