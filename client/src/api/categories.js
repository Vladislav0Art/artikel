import axios from 'axios';


// getting cats
const getUserCategories = () => {
  return axios.get('categories/get-user-categories');
};

// posting new cat
const postNewCategory = ({ title, iconColor }) => {
  return axios.post('categories/post-category', {
    title, iconColor
  });
};

// deleteing a cat
const deleteCategory = (catId) => {
  return axios.delete(`categories/delete-category/${catId}`);
};


export {
  getUserCategories,
  postNewCategory,
  deleteCategory
};