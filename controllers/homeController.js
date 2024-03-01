const Post = require('../models/Post'); // Example model import

const homeController = {
	// Method to display the homepage
	index: async (req, res) => {
		try {
			const posts = await Post.findAll(); // Fetching posts as an example
			res.render('home', { posts }); // Rendering home.handlebars with posts data
		} catch (error) {
			console.error('Error fetching posts:', error);
			res.status(500).send('Error fetching posts');
		}
	}

	// Additional methods for other homepage-related routes
};

module.exports = homeController;
