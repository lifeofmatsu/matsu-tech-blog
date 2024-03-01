const { Comment } = require('../models');

const commentData = [
	{
		id: 100,
		content: 'Great post! I found this really helpful for understanding MVC.',
		postId: 10, // This associates the comment with the post having ID 10.
		userId: 2 // This indicates that a different user (ID 2) commented on the user 1's post.
	}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
