const User = require('../../models/User');

const userController = {
	createUser: async (req, res) => { // Create a new user
		try {
			const newUser = await User.create(req.body); // Assuming req.body is already validated and sanitized
			res.status(201).json(newUser);
		} catch (error) {
			console.error('Error creating user:', error);
			res.status(400).json({ error: 'Error creating user' });
		}
	},

	loginUser: async (req, res) => { // LOGIN user
		try {

		} catch (error) {

		}
	},

	logoutUser: async (req, res) => { // LOGOUT user
		try {

		} catch (error) {

		}
	},

	getUsers: async (req, res) => { // GET ALL users
		try {

		} catch (error) {

		}
	},

	getUserById: async (req, res) => { // GET user by id
		try {
			const user = await User.findByPk(req.params.id);
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ error: 'User not found' });
			}
		} catch (error) {
			console.error('Error fetching user:', error);
			res.status(500).json({ error: 'Error fetching user' });
		}
	},

	updateUser: async (req, res) => {
		try {

		} catch (error) {

		}
	},
	
	deleteUser: async (req, res) => {
		try {

		} catch (error) {

		}
	}
};

module.exports = userController;
