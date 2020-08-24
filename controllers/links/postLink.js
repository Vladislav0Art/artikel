// models
const Link = require('../../models/Link');


// posting a new link
const postLink = (req, res) => {
  const { title, descr, href, catId } = req.body;

  // checking the fileds
  if(!title || !href || !catId) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  
  // creating new instance of a Link
  const newLink = new Link({
    title, descr, href, catId
  });

  // saving new instance
  newLink.save()
    .then((response) => {
      return res.status(200).json({ link: response });
    })
    .catch(err => res.status.json({ message: err.message }));
};

module.exports = postLink;