// models
const Category = require('../../models/Category');


const postCategory = (req, res) => {
  const { title, iconColor } = req.body;

  // if the required data is absent
  if(!title || !iconColor) {
    return res.status(400).json({ message: 'Category must contain text and icon color' });
  }

  // creating new instance
  const newCategory = new Category({
    userId: req.user._id,
    title,
    iconColor
  });

  // saving a new category
  newCategory.save()
    .then(doc => {
      // send the item back
      return res.status(200).json({ item: doc });
    })
    .catch(err => res.status(500).json({ message: err.message }));

};

module.exports = postCategory;