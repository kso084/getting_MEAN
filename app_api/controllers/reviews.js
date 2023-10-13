
var mongoose = require('mongoose');
var Loc = require('../models/locations');//BOOK OUTDATED
const { locationsReadOne } = require('./locations');


var sendJSONRespons = function(res,status,content){
    res.status(status);
    res.json(content);
}

module.exports.reviewsCreate = function(req,res){
    sendJSONRespons(res, 200, {"status":"success"});  
};
module.exports.reviewsDeleteOne = function(req,res){
    sendJSONRespons(res, 200, {"status":"success"});  
};
module.exports.reviewsUpdateOne = function(req,res){
    sendJSONRespons(res, 200, {"status":"success"});  
};

module.exports.reviewsReadOne = async (req, res) => {
    try{
        // first check if req.params, locationid and reviewid exist in request 
        if(req.params && req.params.locationid && req.params.reviewid){
            //only selecting out name and reviews in location
            let location = await Loc.findById(req.params.locationid).select("name reviews").exec()
            var review, respons;
            //no location with that id
            if (!location){
                sendJSONRespons(res,404, {"message":"locationid not found"});
                return;
            }

            //check for reviews
            if(location.reviews && location.reviews.length>0){
                //find review subdocument
                var id = mongoose.Types.ObjectId(req.params.reviewid);
                review = location.reviews.id(id);

                //if no review found
                if(!review){
                    sendJSONRespons(res, 404, {"meassage":"reviewid not found"})
                }else{
                    //create repsons
                    respons = {
                        location: {
                            name : location.name,
                            id: req.params.reviewid
                        },
                        review : review,
                    };

                //successful replay with review
                sendJSONRespons(res,200,respons);
                }
        }else{
            sendJSONRespons(res,404, {"message":"no reviews found"});
           }
        }
        
    }catch(error){
        res.status(404).json(error);
    }
}
