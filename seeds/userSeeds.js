const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'techblogger',
        email: 'techblogger@example.com',
        password: 'hashedpassword123',
        firstName: 'Tech',
        lastName: 'Blogger',
        phoneNum: '123-456-7890'
    },
    {
        id: 2,
        username: 'devGuru',
        email: 'devguru@example.com',
        password: 'hashedpassword234',
        firstName: 'Dev',
        lastName: 'Guru',
        phoneNum: '234-567-8901'
    },
    {
        id: 3,
        username: 'codeMaster',
        email: 'codemaster@example.com',
        password: 'hashedpassword345',
        firstName: 'Code',
        lastName: 'Master',
        // No phoneNum provided
    },
    {
        id: 4,
        username: 'techSavvy',
        email: 'techsavvy@example.com',
        password: 'hashedpassword456',
        firstName: 'Tech',
        lastName: 'Savvy',
        // No phoneNum provided
    },
    {
        id: 5,
        username: 'webWizard',
        email: 'webwizard@example.com',
        password: 'hashedpassword567',
        firstName: 'Web',
        lastName: 'Wizard',
        phoneNum: '345-678-9012'
    },
    {
        id: 6,
        username: 'designDiva',
        email: 'designdiva@example.com',
        password: 'hashedpassword678',
        firstName: 'Design',
        lastName: 'Diva',
        phoneNum: '456-789-0123'
    },
    {
        id: 7,
        username: 'dataDude',
        email: 'datadude@example.com',
        password: 'hashedpassword789',
        firstName: 'Data',
        lastName: 'Dude',
        // No phoneNum provided
    },
    {
        id: 8,
        username: 'algoAce',
        email: 'algoace@example.com',
        password: 'hashedpassword890',
        firstName: 'Algo',
        lastName: 'Ace',
        phoneNum: '567-890-1234'
    },
    {
        id: 9,
        username: 'sysAdmin',
        email: 'sysadmin@example.com',
        password: 'hashedpassword901',
        firstName: 'Sys',
        lastName: 'Admin',
        // No phoneNum provided
    },
    {
        id: 10,
        username: 'networkNinja',
        email: 'networkninja@example.com',
        password: 'hashedpassword012',
        firstName: 'Network',
        lastName: 'Ninja',
        phoneNum: '678-901-2345'
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true, // Ensure that model-level hooks are respected (e.g., authentication hooks)
});

module.exports = seedUsers;

