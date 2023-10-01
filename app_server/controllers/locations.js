//GET "home" page
module.exports.homelist = function(req,res){
    res.render('location-list',{
        title:'Kristian Sørhaug - Prosjekter',
        pageHeader: {
            title: 'Kristian Sørhaug',
            strapline: 'En liste av fullførte, pågående og fremtidige prosjekter'
        },
        locations: [{
            name: 'Getting MEAN',
            address: 'Realfagsbygget, 5007 Bergen',
            rating: 3,
            facilities: ['Express','Angular','MongoDB','Node', 'Bootstrap','Mongoose','Jade'],
            distance: '31h'
        },{
            name: 'Dog Meet App',
            address: 'Kristian Bings vei 9',
            rating: 5,
            facilities: ['Express','Angular','MongoDB','Node','Postman'],
            distance: '12h'
        },{
            name: 'Weather App',
            address: 'Thormøhlens Gate 55, 5006 Bergen',
            rating: 4,
            facilities: ['Express','Angular','MongoDB','Node','The MET Weather API'],
            distance: '5h'
        }]
    })
}
//GET "location info" page
module.exports.locationInfo = function(req,res){
    res.render('location-info',{title:'Projectinfo',
        pageHeader: {title: 'Getting MEAN'},
        sidebar:{
             context: 'Getting MEAN is a project meant to teach the MEAN stack and therfore develop fullstack related skills.',
             callToAction: 'Please leave a review if you like - or dont - the software provided in the project.'
        },
        location: {
            name: 'Getting MEAN',
            address: 'Realfagsbygget, 5007 Bergen',
            rating: 3,
            facilities: ['Express','Angular','MongoDB','Node', 'Bootstrap','Mongoose','Jade'],
            openingTimes: [{
                days: 'Monday-Friday',
                opening: '08:00am',
                closing: '16:30pm',
                closed: false
            },{
                days: 'Saturday',
                opening: '10:00am',
                closing: '14:00pm',
                closed: false
            },{
                days:'Sunday',
                closed: true
            }],
            reviews: [{
                Author: 'Bjarne Stroustrup',
                rating: 5,
                timestamp: '27 october 2023',
                reviewText: 'This project is by far the most impressive piece of code ever created!'
            },{
                Author: 'Bill Gates',
                rating: 5,
                timestamp: '27 september 2023',
                reviewText: 'This project changed my life down to the very core of my being. I will now fire all of my staff and contemplate my existence.'
            }
        ]}
    })
}

//GET "add review" page
module.exports.addReview = function(req,res){
    res.render('location-review-form',{title:'Add review'})
}

