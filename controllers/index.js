// controllers/index.js
const homeController = require('./homeController');
const userController = require('./userController');
const postController = require('./postController');
const commentController = require('./commentController');

module.exports = {
  homeController,
  userController,
  postController,
  commentController,
};