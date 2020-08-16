const passport = require('passport');


// log out user
const logoutUser = (req, res) => {
  console.log(req.user);
  req.logout();
  res.status(200).json({ message: 'Successfully logged out' });
};

module.exports = logoutUser;