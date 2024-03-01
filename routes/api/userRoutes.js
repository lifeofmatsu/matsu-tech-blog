const express = require('express');
const router = express.Router();
const { userController } = require('../../controllers/api');

// Retrieve ALL users
router.get('/', userController.getUsers);

// Retrieve user by id
router.get('/:id', userController.getUserById);

// Create a new user
router.post('/', userController.createUser);

// User login route
router.post('/login', userController.loginUser);

// User logout route
router.post('/logout', userController.logoutUser);

// Update user
router.put('/:id', userController.updateUser);

// Delete user
router.delete('/:id', userController.deleteUser);


module.exports = router;