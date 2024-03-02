const { Post } = require('../../models');

const postController = {
	getPosts: async (req, res) => {
		try {
			const posts = await Post.findAll();
			res.json(posts);
		} catch (error) {
			console.error('Error fetching posts:', error);
			res.status(500).json({
				error: 'Something went wrong! We are unable to process your request at this time. Please try again later.'
			});
		}
	},

	getPostById: async (req, res) => {
		try {
			const post = await Post.findByPk(req.params.id);
			if (post) {
				res.json(post);
			} else {
				res.status(404).json({
					error: 'Could not find the post you are looking for. Please confirm that you have the correct ID and try again.'
				});
			}
		} catch (error) {
			console.error('Error fetching post:', error);
			res.status(500).json({ error: 'Failed to fetch post' });
		}
	},

	// Create a new post
	createPost: async (req, res) => {
		try {
			const newPost = await Post.create({
				title: req.body.title,
				content: req.body.content,
				userId: req.session.userId // Assuming session storage of user info
			});
			res.status(201).json(newPost);
		} catch (error) {
			console.error('Error creating post:', error);
			res.status(500).json({ error: 'Failed to create post' });
		}
	},

	// Make edits to a post
	updatePost: async (req, res) => {
		try {
			const updatedPost = await Post.update(req.body, {
				where: {
					id: req.params.id,
					userId: req.session.userId
				}
			});

			if (updatedPost[0] > 0) {
				res.json({ message: 'Post updated' });
			} else {
				res.status(404).json({
					error: 'Post not found or user not authorized'
				});
			}
		} catch (error) {
			console.error('Error updating post:', error);
			res.status(500).json({ error: 'Failed to update post' });
		}
	},

	// Delete a post
	deletePost: async (req, res) => {
		try {
			const deletedPost = await Post.destroy({
				where: {
					id: req.params.id,
					userId: req.session.userId // Ensure the user owns the post
				}
			});

			if (deletedPost) {
				res.json({ message: 'Post deleted' });
			} else {
				res.status(404).json({
					error: 'Post not found or user not authorized'
				});
			}
		} catch (error) {
			console.error('Error deleting post:', error);
			res.status(500).json({ error: 'Failed to delete post' });
		}
	}
};

module.exports = postController;
