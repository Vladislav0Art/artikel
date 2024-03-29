const express = require('express');
const passport = require('passport');
// route controllers
const registerUser = require('../controllers/users/registerUser');
const loginUser = require('../controllers/users/loginUser');
const logoutUser = require('../controllers/users/logoutUser');
const getUser = require('../controllers/users/getUser');
// middlewares
const ensureAuthenticated = require('../config/auth');


const router = express.Router();


// @route   POST users/register
// @descr   register new user: name, email, password
// @access  Public
router.post('/register', registerUser);



// @route   POST users/login
// @descr   log in user: email, password
// @access  Public
router.post('/login', passport.authenticate('local'), loginUser);



// @route   GET users/logout
// @descr   log out user
// @access  Private
router.get('/logout', ensureAuthenticated, logoutUser);



// @route   GET users/get-user
// @descr   get user
// @access  Private
router.get('/get-user', ensureAuthenticated, getUser);


module.exports = router;