const { Post } = require('../../models');


const postController = {

	getPosts: async (req, res) => {
		try {

		} catch (error) {
			res.status(500).json({ error: 'Something went wrong and we are unable to process your request at this time. Please try again later.' });
		}
	},

	getPostById: async (req, res) => {
		try {

		} catch (error) {
			res.status(404).json({ error: 'Could not find the post you are looking for. Please confirm that you have the correct ID and try again.' });
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
			/* TODO */
		} catch (error) {
			console.error('Error editing post:', error);
			res.status(500).json({ error: 'Failed to save edits to post' });
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

			if (!deletedPost) {
				return res.status(404).json({ error: 'Post not found or user not authorized' });
			}

			res.json({ message: 'Post deleted' });
		} catch (error) {
			console.error('Error deleting post:', error);
			res.status(500).json({ error: 'Failed to delete post' });
		}
	}
};

module.exports = postController;
