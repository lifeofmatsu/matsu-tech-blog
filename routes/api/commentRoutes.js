const express = require('express');
const router = express.Router();
const { commentController } = require('../../controllers/api');

// Create a new comment
router.post('/', commentController.createComment);

// Delete a comment
router.delete('/:id', commentController.deleteComment);

// Additional comment-related routes can be added here

module.exports = router;
