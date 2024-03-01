const { Comment } = require('../../models');


const commentController = {
	// Create a new comment
	createComment: async (req, res) => {
		try {
			const newComment = await Comment.create({
				content: req.body.content,
				userId: req.session.userId, // Assuming you're using session to store user info
				postId: req.body.postId
			});
			res.status(201).json(newComment);
		} catch (error) {
			console.error('Error creating comment:', error);
			res.status(500).json({ error: 'Failed to create comment' });
		}
	},

	// Make edits to a comment. Verify the user owns the comment.
	updateComment: async (req, res) => {
		try {

		} catch (error) {

		}
	},

	// Delete a comment
	deleteComment: async (req, res) => {
		try {
			const deletedComment = await Comment.destroy({
				where: {
					id: req.params.id,
					userId: req.session.userId // Verify the user owns the comment
				}
			});

			if (!deletedComment) {
				return res.status(404).json({ error: 'Comment not found or user not authorized' });
			}

			res.json({ message: 'Comment deleted' });
		} catch (error) {
			console.error('Error deleting comment:', error);
			res.status(500).json({ error: 'Failed to delete comment' });
		}
	}
};

module.exports = commentController;
