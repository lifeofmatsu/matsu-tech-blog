const { User } = require('../models');

const userData = [
	{
		id: 1,
		username: 'techblogger',
		email: 'techblogger@example.com',
		password: 'hashedpassword123'
	},
	{
		id: 2,
		username: 'devGuru',
		email: 'devguru@example.com',
		password: 'hashedpassword234'
	},
	{
		id: 3,
		username: 'codeMaster',
		email: 'codemaster@example.com',
		password: 'hashedpassword345'
	},
	{
		id: 4,
		username: 'techSavvy',
		email: 'techsavvy@example.com',
		password: 'hashedpassword456'
	},
	{
		id: 5,
		username: 'webWizard',
		email: 'webwizard@example.com',
		password: 'hashedpassword567'
	},
	{
		id: 6,
		username: 'designDiva',
		email: 'designdiva@example.com',
		password: 'hashedpassword678'
	},
	{
		id: 7,
		username: 'dataDude',
		email: 'datadude@example.com',
		password: 'hashedpassword789'
	},
	{
		id: 8,
		username: 'algoAce',
		email: 'algoace@example.com',
		password: 'hashedpassword890'
	},
	{
		id: 9,
		username: 'sysAdmin',
		email: 'sysadmin@example.com',
		password: 'hashedpassword901'
	},
	{
		id: 10,
		username: 'networkNinja',
		email: 'networkninja@example.com',
		password: 'hashedpassword012'
	}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
