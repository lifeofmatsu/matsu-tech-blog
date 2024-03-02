const homeController = require('./homeController');
const { userController, postController, commentController } = require('./api');

module.exports = {
	homeController,
	userController,
	postController,
	commentController
};
