
var sendJsonRespons = function(res,status,content){
    res.status(status);
    res.json(content);
}

model.exports.reviewsCreate = function(req,res){
    sendJsonRespons(res, 200, {"status":"success"});  
};
model.exports.reviewsReadOne = function(req,res){
    sendJsonRespons(res, 200, {"status":"success"});  
};
model.exports.reviewsDeleteOne = function(req,res){
    sendJsonRespons(res, 200, {"status":"success"});  
};
model.exports.reviewsUpdateOne = function(req,res){
    sendJsonRespons(res, 200, {"status":"success"});  
};