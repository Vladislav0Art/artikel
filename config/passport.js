const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
// models
const User = require('../models/User');


// match user in db by email
const findUserByEmail = (email) => {
  return User.findOne({ email });
};


// match passwords
const matchPasswords = (passedPassword, userPassword) => {
  return new Promise((resolve, reject) => {
      
    // comparing passwords
    bcrypt.compare(passedPassword, userPassword)
      .then(isMatch => resolve(isMatch))
      .catch(err => reject(err));

  });
};


const passportAuthentication = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      
      // match user
      findUserByEmail(email)
        .then(user => {
          if(!user) {
            return done(null, false, { message: 'Email is not registered' });
          }

          // match password
          matchPasswords(password, user.password)
            .then((isMatch) => {
              if(isMatch) {
                done(null, user);
              }
              else {
                done(null, false, { message: 'Passwords do not match' });
              }
            })
            .catch(err => console.log(err));

        })
        .catch(err => console.log(err));
   
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};


module.exports = passportAuthentication;