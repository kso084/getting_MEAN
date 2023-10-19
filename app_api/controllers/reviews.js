
var mongoose = require('mongoose');
var Loc = require('../models/locations');
var Rev = require('../models/reviews');





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
            let review, respons;
            //no location with that id
            if (!location){
                sendJSONRespons(res,404, {"message":"locationid not found"});
                return;
            }

            //check for reviews
            if(location.reviews && location.reviews.length>0){
                //find review subdocument                                          
                let review_id = new mongoose.Types.ObjectId(req.params.reviewid);
                review = Loc.location('reviews').find({id:review_id});

                //if no review found
                if(!review){
                    sendJSONRespons(res, 404, {"meassage":"reviewid not found"})
                }else{
                    //create respons
                    respons = {
                        location: {
                            name : location.name,
                            id: req.params.reviewid
                        },
                        review : review,
                    };

                //successful reply with review
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
