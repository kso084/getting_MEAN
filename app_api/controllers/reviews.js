
var mongoose = require('mongoose');
var Loc = require('../models/locations');//BOOK OUTDATED


var sendJSONRespons = function(res,status,content){
    res.status(status);
    res.json(content);
}

module.exports.reviewsCreate = function(req,res){
    sendJSONRespons(res, 200, {"status":"success"});  
};
module.exports.reviewsReadOne = function(req,res){
    sendJSONRespons(res, 200, {"status":"success"});  
};
module.exports.reviewsDeleteOne = function(req,res){
    sendJSONRespons(res, 200, {"status":"success"});  
};
module.exports.reviewsUpdateOne = function(req,res){
    sendJSONRespons(res, 200, {"status":"success"});  
};