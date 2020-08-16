const bcrypt = require('bcryptjs');
// models
const User = require('../../models/User');


// searching for a user instance in db
const findUserWithEmail = (email) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email })
      .then(user => {
        if(user) 
          resolve(true);
        else 
          resolve(false);
      })
      .catch(err => reject(err));
  });
};


// generating hashed version of the password
const hashUserPassword = (password) => {
  return new Promise((resolve, reject) => {
    // hash password
    bcrypt.genSalt(10, (err, salt) => {
      // if error occured
      if(err) {
        reject(err);
      }

      bcrypt.hash(password, salt, (err, hashedPassword) => {
        // if error occured
        if(err) {
          reject(err);
        }

        // resolving hashed password 
        resolve(hashedPassword);
      });

    });

  });
};


// register new user
const registerUser = (req, res) => {
  const { email, name, password, passwordCopy } = req.body;
  
  // checking empty fields
  if(!email || !name || !password || !passwordCopy) {
    return res.status(400).json({ message: 'Each field must be filled' });
  }

  // checking passwords
  if(password !== passwordCopy) {
    return res.status(400).json({ message: 'Passwords are not the same' });
  }

  // checking if user with the email exists
  findUserWithEmail(email)
    .then((result) => {
      if(result) {
        return res.status(400).json({ message: 'Email is already taken. Try another one' });
      }

      // generating hashed password
      hashUserPassword(password)
        .then(hashedPassword => {
          
          // creating new user
          const newUser = new User({
            email,
            name,
            password: hashedPassword
          });

          // saving user instance
          newUser.save()
            .then(() => res.status(200).json({ message: 'Successfully registered' }))
            .catch(err => res.status(400).json({ message: err.message }));

        })
        .catch(err => res.status(400).json({ message: err.message }));

    })
    .catch(err => res.status(400).json({ message: err.message }));

};


module.exports = registerUser;