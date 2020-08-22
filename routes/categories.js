const express = require('express');
// route controllers
const postCategory = require('../controllers/categories/postCategory');
const getUserCategories = require('../controllers/categories/getUserCategories');
const deleteUserCategory = require('../controllers/categories/deleteUserCategory');
// middlewares
const ensureAuthenticated = require('../config/auth');

const router = express.Router();


// @route   POST categories/post-category
// @descr   post a new category: iconColor, text, userId
// @access  Private
router.post('/post-category', ensureAuthenticated, postCategory);



// @route   GET categories/get-user-categories
// @descr   get all categories by user id
// @access  Private
router.get('/get-user-categories', ensureAuthenticated, getUserCategories);



// @route   DELETE categories/delete-category/:id
// @descr   deleting cat by its id
// @access  Private
router.delete('/delete-category/:id', ensureAuthenticated, deleteUserCategory);


module.exports = router;