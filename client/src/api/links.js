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


// deleting link from db
const deleteLink = (id) => {
  return axios.delete(`links/delete-link/${id}`);
};


// updating link in db
const updateLink = (id, data) => {
  return axios.put(`links/update-link/${id}`, data);
};


export {
  getLinksByCatId,
  postLink,
  deleteLink,
  updateLink
};