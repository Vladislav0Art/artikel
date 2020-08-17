import axios from 'axios';


// get user
const getUser = () => {
  return axios.get('users/get-user');
};


// login user
const loginUser = (user) => {
  const { email, password } = user;
  return axios.post('users/login', {
    email, password
  });
};


// register user
const registerUser = (user) => {
  const { name, email, password, passwordCopy } = user;
  return axios.post('users/register', {
    name,
    email,
    password,
    passwordCopy
  });
};



export {
  getUser,
  loginUser,
  registerUser
};