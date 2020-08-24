import axios from 'axios';


// getting links by category id
const getLinksByCatId = (catId) => {
  return axios.get(`links/get-links/${catId}`);
};


// posting a new link to db
const postLink = (data) => {
  const { title, descr, href, catId } = data;

  return axios.post('links/post-link', {
    title, descr, href, catId
  });
};


export {
  getLinksByCatId,
  postLink
};