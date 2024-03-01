const homeController = require('./homeController');
const userController = require('./api/userController');
const postController = require('./api/postController');
const commentController = require('./api/commentController');

module.exports = {
	homeController,
	userController,
	postController,
	commentController
};
