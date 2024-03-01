const express = require('express');
const router = express.Router();
const { postController } = require('../../controllers/api');

// Create a new post
router.post('/', postController.createPost);

// Delete a post
router.delete('/:id', postController.deletePost);

// Additional post-related routes can be added here

module.exports = router;
