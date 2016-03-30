var mongoose = require('mongoose');

/*
	CONNECTING TO DATABASE
*/


mongoose.set('debug',true);

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;

    //mongoose.debug(true);
    db.on('error', console.error.bind(console, 'Mongo DB connection error...'));
    db.once('open', function callback() {
        console.log("Connection to MongoDB database established at " + config.db);
    });
}
