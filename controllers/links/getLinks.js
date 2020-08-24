// models
const Link = require('../../models/Link');


// getting links by category id
const getLinks = (req, res) => {
  const catId = req.params.catId;
  
  // finding all links by category id
  Link.find({ catId })
    .then(links => res.status(200).json({ links }))
    .catch(err => res.status.json({ message: err.message }));
};


module.exports = getLinks;