const express = require('express');
const router = express.Router();
const { postController } = require('../../controllers/api');

// Find ALL posts
router.get('/', postController.getPosts);

// Find post by id
router.get('/:id', postController.getPostById);

// Create a new post
router.post('/', postController.createPost);

// Make edits to a post
router.put('/:id', postController.updatePost);

// Delete a post
router.delete('/:id', postController.deletePost);


module.exports = router;
