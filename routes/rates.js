var express = require('express');
var router = express.Router();
Rate = require("../schemas/ratingSchema")
User = require("../schemas/userSchema"); 
Place = require("../schemas/placeSchema")


router.post('/save/:email/:googleId/:price/:quality/:portions', function(req, res, next) {
    getUser(req.params.email).then(user => {
        getPlace(req.params.googleId).then(place => {
            rate = new Rate({
                price:req.params.price,
                quality:req.params.quality,
                portion:req.params.portions,
                user_id:user.id,
                place_id:place.id
            })
            rate.save()
        })
    })
    res.send('saved');
    
});

router.get('/:googleId', function(req, res, next) {
    getPlace(req.params.googleId).then(place => {
        getRate(place.id).then(rate => {
            res.send(rate)
        })
    })
});


router.post('/aaaa', function(req, res, next) {
    let place = new Place({
        google_id:"shit"
    })
    console.log('aaa');
    place.save();
    res.send('saved')
});

function getUser(email) {
    return User.findOne({ email: email }).exec();
}

function getPlace(id) {
    return Place.findOne({ google_id: id }).exec();
}

function getRate(id) {
    return Rate.find({place_id:id}).exec();
}

module.exports = router;
