const express = require('express');
// route controllers
const postLink = require('../controllers/links/postLink');
const getLinks = require('../controllers/links/getLinks');
const deleteLink = require('../controllers/links/deleteLink');
const updateLink = require('../controllers/links/updateLink');
// middlewares
const ensureAuthenticated = require('../config/auth');

const router = express.Router();


// @route   GET links/get-links/:catId
// @descr   getting all links by catId
// @access  Private
router.get('/get-links/:catId', ensureAuthenticated, getLinks);



// @route   POST links/post-link
// @descr   post a new link: title, descr, catId, link
// @access  Private
router.post('/post-link', ensureAuthenticated, postLink);



// @route   DELETE links/delete-link/:linkId
// @descr   deleting a link item in db by its id
// @access  Private
router.delete('/delete-link/:linkId', ensureAuthenticated, deleteLink);



// @route   PUT links/update-link/:linkId
// @descr   updating a link item in db by its id
// @access  Private
router.put('/update-link/:linkId', ensureAuthenticated, updateLink);


module.exports = router;