const { User } = require('../../models');


const userController = {
	createUser: async (req, res) => {
		try {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);
			const newUser = await User.create({
				...req.body,
				password: hashedPassword
			});
			res.status(201).json(newUser);
		} catch (error) {
			console.error('Error creating user:', error);
			res.status(400).json({ error: 'Error creating user' });
		}
	},

	loginUser: async (req, res) => {
		try {
			const user = await User.findOne({
				where: { email: req.body.email }
			});
			if (!user) {
				return res.status(401).json({ error: 'Login failed' });
			}

			const isValidPassword = await bcrypt.compare(
				req.body.password,
				user.password
			);
			if (!isValidPassword) {
				return res.status(401).json({ error: 'Login failed' });
			}

			// Assuming you have session management set up
			req.session.userId = user.id;
			res.json({ message: 'Login successful' });
		} catch (error) {
			console.error('Error logging in:', error);
			res.status(500).json({ error: 'Error logging in' });
		}
	},

	logoutUser: async (req, res) => {
		try {
			// Assuming you are using session
			req.session.destroy();
			res.json({ message: 'Logout successful' });
		} catch (error) {
			console.error('Error logging out:', error);
			res.status(500).json({ error: 'Error logging out' });
		}
	},

	getUsers: async (req, res) => {
		try {
			const users = await User.findAll();
			res.json(users);
		} catch (error) {
			console.error('Error fetching users:', error);
			res.status(500).json({ error: 'Error fetching users' });
		}
	},

	getUserById: async (req, res) => {
		// GET user by id
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
			const updatedUser = await User.update(req.body, {
				where: { id: req.params.id }
			});
			if (updatedUser[0] > 0) {
				res.json({ message: 'User updated' });
			} else {
				res.status(404).json({ error: 'User not found' });
			}
		} catch (error) {
			console.error('Error updating user:', error);
			res.status(500).json({ error: 'Error updating user' });
		}
	},

	deleteUser: async (req, res) => {
		try {
			const deletedUser = await User.destroy({
				where: { id: req.params.id }
			});
			if (deletedUser) {
				res.json({ message: 'User deleted' });
			} else {
				res.status(404).json({ error: 'User not found' });
			}
		} catch (error) {
			console.error('Error deleting user:', error);
			res.status(500).json({ error: 'Error deleting user' });
		}
	}
};

module.exports = userController;
