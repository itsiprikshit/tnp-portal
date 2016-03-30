var mongoose = require('mongoose');
var schema = mongoose.Schema;

var companiesSchema = new schema({
	
	name: {type: String,required:true},
	about: {type: String,required:true},
	package: {type: Number,required:true},
	branches: {type: Array, required:true},
	eligibilty: {type: String}

});

var companiesModel = mongoose.model('companies',companiesSchema);

module.exports = companiesModel;