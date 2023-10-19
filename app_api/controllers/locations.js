
var mongoose = require('mongoose');
var Loc = require('../models/locations');


var sendJSONRespons = function(res,status,content){
    res.status(status);
    res.json(content);
}
module.exports.locationsCreate = function(req,res){
    sendJSONRespons(res, 200, {"status":"success"});    
};module.exports.locationsDeleteOne = function(req,res){
    sendJSONRespons(res, 200, {"status":"success"});  
};module.exports.locationsUpdateOne = function(req,res){
    sendJSONRespons(res, 200, {"status":"success"});  
};module.exports.locationsListByDistance = function(req,res){
    sendJSONRespons(res, 200, {"status":"success"});  
};


module.exports.locationsReadOne = async (req, res) => {
    try{
        // first check if req.params and locationid exist in request 
        if(req.params && req.params.locationid){

            let location = await Loc.find({}).exec();
            console.log(location);

            //no location with that id
            if (!location){
                sendJSONRespons(res,404, {"message":"locationid not found"});
                return;
            }
        
            //send locations
            sendJSONRespons(res, 200, location);
    }   
        else{
            sendJSONRespons(res, 404, {"message":"no locationid in request"});
    }
    
    }catch(error){
        res.status(404).json(error);
    }
}

module.exports.seedDB = async (req, res) => {
    try {
        const reviewToSeed = await new Review({
            author: "Bill Gates",
            rating: 5,
            reviewText: "Totally amazing work!"
        }).save();
        const locationToSeed = await new Location({
            name: "Getting MEAN",
            address: "Realfagbygget",
            rating: 5,
            facilities: ['MongoDB','Express', 'Node', 'Angular'],
            coords: [1,2],
            openingTimes:[{
                days: "Mon-Fri", 
                opening: '8:00am', 
                closing: '16:00pm', 
                closed: false},
                {
                    days:'Sat',
                    opening: '9:00am', 
                    closing: '14:00pm', 
                    closed: false}, 
                    {
                        days:'Sun', 
                        closed: true
                    }
            ],
            reviews: [reviewToSeed._id]
        }).save();
        sendJSONRespons(res, 200, {"status":"success"});
    } catch (error) {
        res.status(500).json(error);
    }
};

