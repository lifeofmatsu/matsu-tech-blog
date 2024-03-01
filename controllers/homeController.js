const { Comment, Post, User } = require('../models');

const homeController = {
	index: async (req, res) => { // Method to display the homepage
		try {
			const posts = await Post.findAll();
			res.render('home', { posts }); // Rendering home.handlebars with posts data
		} catch (error) {
			console.error('Error fetching posts:', error);
			res.status(500).send('Error fetching posts');
		}
	},
	
    dashboard: async (req, res) => { // Method to display the dashboard
        // ...
    }

	// Additional methods for other homepage-related routes
};

module.exports = homeController;
