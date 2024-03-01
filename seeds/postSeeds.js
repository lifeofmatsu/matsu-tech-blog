const { Post } = require('../models');

const postData = [
	{
		id: 10,
		title: 'Why MVC is Essential for Web Development',
		content: 'MVC allows for efficient code organization, easier testing, and separation of concerns...',
		userId: 1 // This associates the post with the user having ID 1.
	}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
