const { Comment } = require('../models');

const commentData = [
	{
		id: 100,
		content: 'Great post! I found this really helpful for understanding MVC.',
		postId: 10,
		userId: 2 // Indicates that a different user (ID 2) commented on user (ID 1)'s post.
	},
	{
		id: 101,
		content: 'Really insightful post! Thanks for sharing.',
		postId: 11,
		userId: 5
	},
	{
		id: 102,
		content: "I've always found MVC confusing, but this clears it up.",
		postId: 12,
		userId: 6
	},
	{
		id: 103,
		content: "Can't wait to see how machine learning evolves!",
		postId: 13,
		userId: 7
	},
	{
		id: 104,
		content: 'Cryptography is fascinating. Great overview for beginners.',
		postId: 14,
		userId: 8
	},
	{
		id: 105,
		content: "Responsive design is crucial in today's mobile-first world.",
		postId: 15,
		userId: 9
	},
	{
		id: 106,
		content: 'Database optimization is an art. Thanks for the tips!',
		postId: 16,
		userId: 10
	},
	{
		id: 107,
		content: 'Security should always be a top priority in coding.',
		postId: 17,
		userId: 2
	},
	{
		id: 108,
		content: 'IoT is changing everything. Great read!',
		postId: 18,
		userId: 3
	},
	{
		id: 109,
		content: 'The cloud is the future, and the future is now.',
		postId: 19,
		userId: 4
	}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
