const ogs = require('open-graph-scraper');
// models
const Link = require('../../models/Link');


// posting a new link
const postLink = (req, res) => {
  const { title, descr, href, catId } = req.body;

  // checking the fileds
  if(!title || !href || !catId) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  
  // getting og info from the resource
  const options = {
    url: href
  };

  ogs(options, (err, results, response) => {
    // creating new instance of a Link
    const newLink = new Link({
      title, descr, href, catId
    });

    // if og info was demanded
    if(!err && results.success) {
      newLink.ogInfo = {
        ogTitle: results.ogTitle,
        ogDescription: results.ogDescription,
        ogImage: results.ogImage,

      };
    }

    console.log(newLink);

    // saving new instance
    newLink.save()
    .then((response) => {
      return res.status(200).json({ link: response });
    })
    .catch(err => res.status.json({ message: err.message }));

  });

};

module.exports = postLink;