// models
const Link = require('../../models/Link');


// deleting link item in db by its id
const deleteLink = (req, res) => {
  const linkId = req.params.linkId;
  
  // delting link in db
  Link.deleteOne({ _id: linkId })
    .then(response => res.status(200).json(response))
    .catch(err => res.status.json({ message: err.message }));
};


module.exports = deleteLink;