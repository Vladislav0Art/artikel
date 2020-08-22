// models
const Category = require('../../models/Category');


// deleting cat by its id
const deleteUserCategory = (req, res) => {
  const catId = req.params.id;
  
  // deleting cat
  Category.deleteOne({ _id: catId })
    .then(() => res.status(200).json({ message: 'Deleted successfully' }))
    .catch((err) => res.status(400).send({ message: err.message }));
};


module.exports = deleteUserCategory;