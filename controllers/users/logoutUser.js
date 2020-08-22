const passport = require('passport');

// log out user
const logoutUser = (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Successfully logged out' });
};

module.exports = logoutUser;