// log in user
const loginUser = (req, res) => {
  if(req.user) {
    res.status(200).json(req.user);
  }
  else {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = loginUser;