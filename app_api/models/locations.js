var mongoose = require('mongoose');

//Future possible change is making the time in minutes from midnight 
var openingHoursSchema = new mongoose.Schema({
    day: {type: String, required: true},
    opening: String,
    closing: String,
    closed: {type: Boolean, required:true}
})

var reviewSchema = new mongoose.Schema({
    author: {type:String, required: true},
    rating: {type: Number, required: true, min:0 , max:5},
    reviewText: String,
    createdTime: {type:Date,"default": Date.now}
})

var locationSchema = new mongoose.Schema({
    name: {type:String, required: true},
    address: String,
    rating: {type: Number, "default": 5, min:0, max:5},
    facilities: [String],
    coords: {type:[Number], index: '2dsphere'},//longitude then latitude! Not used in this program due to google map API cost
    openingTimes: [openingHoursSchema],
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Location', locationSchema);

//db.locations.save({name: 'Getting MEAN', address: 'Realfagsbygget', rating: 3, facilities: ['MongoDB','Express', 'Node', 'Angular'],coords: [1,2], openingTimes:[{days: "Mon-Fri", opening: '8:00am', closing: '16:00pm', closed: false},{days:'Sat',opening: '9:00am', closing: '14:00pm', closed: false}, {days:'Sun', closed: true}]});

//Kristian_db.locations.update({name: "How that?"},{$push: {reviews: {author: 'Jens Hetland', id: ObjectId(),rating: 5, timestamp: new Date("Jul 5, 1993"), reviewText: "OMG, This is amazing!"}}})