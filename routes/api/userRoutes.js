const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/userController');

// Create a new user
router.post('/', userController.createUser);

// User login route
router.post('/login', userController.loginUser);

// User logout route
router.post('/logout', userController.logoutUser);

// Additional user-related routes can be added here

module.exports = router;