const express = require('express');
// route controllers
const registerUser = require('../controllers/users/registerUser');
const loginUser = require('../controllers/users/loginUser');

const router = express.Router();


// @route   POST users/register
// @descr   register new user: name, email, password
// @access  Public
router.post('/register', registerUser);



// @route   POST users/login
// @descr   log in user: email, password
// @access  Public
router.post('/login', loginUser);



module.exports = router;