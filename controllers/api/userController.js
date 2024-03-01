const User = require('../models/User'); // Importing the User model

const userController = {
	// Create a new user
	createUser: async (req, res) => {
		try {
			const newUser = await User.create(req.body); // Assuming req.body is already validated and sanitized
			res.status(201).json(newUser);
		} catch (error) {
			console.error('Error creating user:', error);
			res.status(400).json({ error: 'Error creating user' });
		}
	},

	// Get user details
	getUser: async (req, res) => {
		try {
			const user = await User.findByPk(req.params.id); // Finding a user by primary key/id
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ error: 'User not found' });
			}
		} catch (error) {
			console.error('Error fetching user:', error);
			res.status(500).json({ error: 'Error fetching user' });
		}
	}

	// Additional methods for other user-related API routes
};

module.exports = userController;
