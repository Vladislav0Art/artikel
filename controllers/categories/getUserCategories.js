// models
const Category = require('../../models/Category');

// getting user cats
const getUserCategories = (req, res) => {
  const userId = req.user._id;

  // searching all cats by the user id
  Category.find({ userId })
    .then(docs => res.status(200).json({ items: docs }))
    .catch(err => res.status(500).json({ message: err.message }));
};


module.exports = getUserCategories;
