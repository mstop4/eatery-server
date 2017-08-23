var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
    google_id: String
});

module.exports = mongoose.model("Places", PlaceSchema);