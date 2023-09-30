/*
// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


*/
var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/Others');

//Location pages
router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview);

//Other pages
router.get('/about',ctrlOthers.about);

/*var hompageController = function (req,res){
  res.render('index',{title:'Express'});
};*/

// GET home page. 
//router.get('/',ctrlMain.index);

module.exports = router;