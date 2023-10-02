var mongoose = require('mongoose');

var dbURI = 'mongodb://127.0.0.1/Kristian_Sorhaug'
mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

var gracefulShutdown = function (MessageChannel, callback){
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through '+ msg);
        callback;    
    });
};

process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart',function(){
        process.kill(process.pid, 'SIGUSR2')
    });
});

process.on('SIGINT', function(){
    gracefulShutdown('app termination',function(){
        process.exit(0);
    });
});

process.on('SIGTERM', function(){
    gracefulShutdown('Will this fire?',function(){
        process.exit(0);
    });
});

//WINDOWS
var readLine = require("readLine");
if(process.platform === "win64"){
    var r1 = readLine.createOmterface({
        input: process.stdin,
        output: process.stdout
    });
    r1.on("SIGINT", function(){
        process.emit("SIGINT");
    });
}