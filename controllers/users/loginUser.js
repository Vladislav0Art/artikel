// models
const User = require('../../models/User');


// log in user
const loginUser = (req, res) => {
  if(req.user) {
    User
      .findById(req.user._id)
      .select('-password')
      .then(user => res.status(200).json(user))
      .catch(err => res.status(500).json({ message: err.message }))
  }
  else {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = loginUser;