const { User, Post, Comment } = require('../models');


const homeController = {
	index: async (req, res) => {
		// Method to display the homepage
		try {
			const posts = await Post.findAll({
				include: [{ model: Comment }, { model: User }]
			});
			// Convert data before sending to view if necessary
			res.render('home', { posts: JSON.parse(JSON.stringify(posts)) });
		} catch (error) {
			console.error('Error fetching posts:', error);
			res.status(500).send('Error fetching posts');
		}
	},

	dashboard: async (req, res) => {
		const userId = req.session.userId;
		try {
			const userPosts = await Post.findAll({
				where: { userId: userId },
				include: [{ model: Comment }, { model: User }]
			});
			res.render('dashboard', {
				posts: JSON.parse(JSON.stringify(userPosts))
			});
		} catch (error) {
			console.error('Error fetching user posts:', error);
			res.status(500).send('Error fetching user posts');
		}
	},

	login: async (req, res) => {
		try {
			// The login form should handle posting to the userController's login route
			res.render('login');
		} catch (error) {
			console.error('Error rendering login page:', error);
			res.status(500).send('Error rendering login page');
		}
	},

	signup: async (req, res) => {
		try {
			res.redner('signup');
		} catch (error) {
			console.error('Error rendering registration page:', error);
			res.status(500).send('Error rendering registration page');
		}
	}
};

module.exports = homeController;
