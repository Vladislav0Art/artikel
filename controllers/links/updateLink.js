// models
const Link = require('../../models/Link');


// updating a link item in db by its id
const updateLink = (req, res) => {
  const linkId = req.params.linkId;
  const { title, descr, href } = req.body;

  // validating the data
  if(!title || !href) {
    return res.status(400).json({ message: 'Title and link must contain non-empty value' });
  }
  
  // updating link in db
  Link.updateOne({ _id: linkId }, { title, descr, href })
    .then(response => res.status(200).json(response))
    .catch(err => res.status(400).json({ message: err.message }));
};


module.exports = updateLink;