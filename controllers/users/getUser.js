// log in user
const getUser = (req, res) => {
  if(req.user) {
    res.status(200).json({ message: 'User authenticated' });
  }
  else {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = getUser;