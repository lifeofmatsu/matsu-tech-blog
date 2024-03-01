const { User } = require('../models');

const userData = [
	{
		id: 1,
		username: 'techblogger',
		email: 'techblogger@example.com',
		password: 'hashedpassword123' // Normally, you wouldn't expose a password, even if hashed.
	}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
