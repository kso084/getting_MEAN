
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
            let location = await Loc.findById(req.params.locationid).exec();
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


