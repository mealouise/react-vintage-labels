const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    description: {type:String, required: true},
    price: {type:Number, required: true},
    image:{type:String, required: true},
    
});

module.exports = mongoose.model('listings', listingSchema);