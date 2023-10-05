
var mongoose = require('mongoose');
var Loc = mongoose.model('locations');

var sendJsonRespons = function(res,status,content){
    res.status(status);
    res.json(content);
}

model.exports.locationsCreate = function(req,res){
    sendJsonRespons(res, 200, {"status":"success"});    
};
model.exports.locationsReadOne = function(req,res){
    sendJsonRespons(res, 200, {"status":"success"});  
};
model.exports.locationsDeleteOne = function(req,res){
    sendJsonRespons(res, 200, {"status":"success"});  
};
model.exports.locationsUpdateOne = function(req,res){
    sendJsonRespons(res, 200, {"status":"success"});  
};