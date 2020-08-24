const express = require('express');
// route controllers
const postLink = require('../controllers/links/postLink');
const getLinks = require('../controllers/links/getLinks');
// middlewares
const ensureAuthenticated = require('../config/auth');

const router = express.Router();


// @route   POST links/post-link
// @descr   post a new link: title, descr, catId, link
// @access  Private
router.post('/post-link', ensureAuthenticated, postLink);



// @route   GET links/get-links/:catId
// @descr   getting all links by catId
// @access  Private
router.get('/get-links/:catId', ensureAuthenticated, getLinks);


module.exports = router;