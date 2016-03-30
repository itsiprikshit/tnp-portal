//req.session.passport.user 
var passport = require('passport');
var User = require('../models/users');
var Companies = require('../models/companies');
var localAuth = require('../api/auth/localAuth')();

var user;
exports.appliedFor =  function(req, res, next){

	
	
	if(req.session.passport.user === undefined){
   
   		res.json('Please login');
		res.redirect('/login');
		
 	}
  	else{
    
  		user = req.user;
  		//to fetch the company_id from user
  		User.find({_id: user._id},{'appliedFor' :1,_id:0},function(err,appliedfor){
  			
  			res.json({response:appliedfor[0]});
  		    var id1=appliedfor[0].appliedfor;
  		    console.log(id1);
  			 Companies.find({_id:{"$in":id1}},{'name':1},function(err,companies){

  			});
  		});
  		//to fetch company name from id		
  		
  		//var companyNames = companies.find({"_id":{"$in":id["appliedfor"]}},{'name':1});
		

  		
  		
		

  	};

  
		


};