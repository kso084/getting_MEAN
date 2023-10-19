var mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;

var reviewSchema = new mongoose.Schema({
    author: {type:String, required: true},
    rating: {type: Number, required: true, min:0 , max:5},
    reviewText: String,
    createdTime: {type:Date,"default": Date.now}
})

module.exports = mongoose.model('Review', reviewSchema);