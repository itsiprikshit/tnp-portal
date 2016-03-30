var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var User = require('../../models/users');

module.exports = function(){
  passport.use('local-login', new LocalStrategy(function(username, password, done) {
      /*
       * Create an username check
       */

       console.log(username);
      User.findOne({ 'username': parseInt(username), 'password': password }).exec(function (err, user) {

         console.log('err');
          if (err)
              return done(err);
          if (user)
              return done(null, user);
          else
              return done(null, false);
      });
  }));

  passport.serializeUser(function (user, done) {
    if(user){

       done(null, user._id);
    }
   });

  passport.deserializeUser(function (id, done) {
     User.findOne({ '_id': id }).exec(function (err, user) {
         done(err, user);
     });
  });
}
