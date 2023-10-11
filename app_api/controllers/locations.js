
var mongoose = require('mongoose');
var Loc = require('../models/locations');//BOOK OUTDATED

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
        const location = await Loc.findById(req.params.locationid).exec();
            if(location == null){
                sendJSONRespons(res,404, {"message":"locationid not found"});
                return;
            }else if(location.get("name")=="CastError"){
                sendJSONRespons(res,404, {"message":"locationid not found"});
                return;
            }

            sendJSONRespons(res, 200, location);
    }catch(error){
        res.status(500).json(error);
    }
}


/*Book: Didnt work
function(req,res){
Loc.findById(req.params.locationid).then(function(err,location){
    sendJSONRespons(res, 200, location)
})
};
*/
