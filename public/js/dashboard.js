document.addEventListener('DOMContentLoaded', () => {
	const newPostForm = document.querySelector('#newPostForm');
	const newPostButton = document.querySelector('#newPostButton');
    const editPostForm = document.querySelectorAll('.editPostForm');
    const deletePostButton = document.querySelector('#deletePostButton');

	// On click event, generate a blank blog post form 
	newPostButton.addEventListener('click', () => {
		const form = document.getElementById('newPostForm');

        // Toggle visibility of new blog post form
		if (form.style.display === 'none') {
			form.style.display = 'block';
		} else {
			form.style.display = 'none';
		}
	});

	// On submit event, send server request to POST the new blog post
	newPostForm.addEventListener('submit', async (event) => {
		event.preventDefault();

		// Retrieve `title` and `content` from blog post; trim whitespace
		const title = document.querySelector('#post-title').value.trim();
		const content = document.querySelector('#post-content').value.trim();

		// If both `title` and `content` are provided
		if (title && content) {
			// Send a POST request to the server to create a new post
			const response = await fetch('/api/posts', {
				method: 'POST',
				body: JSON.stringify({ title, content }),
				headers: { 'Content-Type': 'application/json' }
			});

			// Reload page to reflect that blog post was created successfully
			if (response.ok) {
				document.location.reload();
			} else {
				alert('Failed to create post.');
			}
		}
	});
	
	window.toggleEditForm = (postId) => {
		const form = document.getElementById(`editPostForm-${postId}`);

        if (form.style.display === 'block') {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
        }
	};

	// Listens for submit event on each thumbnail's corresponding editing form
	editPostForm.forEach((form) => {
		form.addEventListener('submit', async (event) => {
			event.preventDefault();

			// Extracts unique ID of the post the dashboard thumbnail belongs to
			const postId = form.getAttribute('data-post-id');
			const title = document.querySelector(`#post-title-${postId}`).value.trim();
			const content = document.querySelector(`#post-content-${postId}`).value.trim();

			// If both `title` and `content` are provided
			if (title && content) {
				// Send PUT request to update blog post with the new edits
				const response = await fetch(`/api/posts/${postId}`, {
					method: 'PUT',
					body: JSON.stringify({ title, content }),
					headers: { 'Content-Type': 'application/json' }
				});

				// Reload page to reflect that the blog was updated successfully
				if (response.ok) {
					document.location.reload();
				} else {
					alert('Failed to update post.');
				}
			}
		});
	});

    // Listens for click event on each thumbnail's corresponding delete button
	deletePostButton.forEach(button => {
        button.addEventListener('click', async (event) => {
            event.preventDefault();

            if (!confirm("Are you sure you want to delete this post?")) return;

            // Extract unique ID for the Post the delete button belongs to
            const postId = button.getAttribute('data-post-id');

            // Send a DELETE request to remove the post
            const response = await fetch(`/api/posts/${postId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });

            // Reload page to reflect that blog post was removed successfully
            if (response.ok) {
                document.location.reload();
            } else {
                alert('Failed to delete post.');
            }
        });
    });
});
