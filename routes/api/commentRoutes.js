const express = require('express');
const router = express.Router();
const { commentController } = require('../../controllers/api');


// Fetch all comments on a given post
router.get('/post/:postId/comments', commentController.getAllCommentsForPost);

// Fetch a specific comment
router.get('/comments/:id', commentController.getCommentById);

// Create a new comment
router.post('/', commentController.createComment);

// Update a comment
router.put('/:id', commentController.updateComment);

// Delete a comment
router.delete('/:id', commentController.deleteComment);


module.exports = router;
