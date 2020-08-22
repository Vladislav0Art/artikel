import axios from 'axios';


// get cats
const getUserCategories = () => {
  return axios.get('categories/get-user-categories');
};


export {
  getUserCategories
};