document.addEventListener('DOMContentLoaded', () => {
	// Select the new post form and the button for creating a new post
	const newPostForm = document.querySelector('#newPostForm');
	const newPostButton = document.querySelector('#newPostButton');
    const editPostForm = document.querySelectorAll('.editPostForm');

	// Add a click event listener to the new post button
	newPostButton.addEventListener('click', () => {
		// Toggle the display of the new post form when the button is clicked
		const form = document.getElementById('newPostForm');
		if (form.style.display === 'none') {
			form.style.display = 'block';
		} else {
			form.style.display = 'none';
		}
	});

	// Add a submit event listener to the new post form
	newPostForm.addEventListener('submit', async (event) => {
		// Prevent the default form submission behavior
		event.preventDefault();

		// Retrieve the title and content from the form, trimming whitespace
		const title = document.querySelector('#post-title').value.trim();
		const content = document.querySelector('#post-content').value.trim();

		// Check if both title and content are provided
		if (title && content) {
			// Send a POST request to the server to create a new post
			const response = await fetch('/api/posts', {
				method: 'POST',
				body: JSON.stringify({ title, content }),
				headers: { 'Content-Type': 'application/json' }
			});

			// Reload the page to show the new post if the request was successful
			if (response.ok) {
				document.location.reload();
			} else {
				// Alert the user if there was an error creating the post
				alert('Failed to create post.');
			}
		}
	});

	// Toggles the edit form for a specific post. Called on client side in `blogThumbnail`
	window.toggleEditForm = (postId) => {
		// Select the edit form for the post using its postId
		const form = document.getElementById(`editPostForm-${postId}`);
		// Toggle the display of the form
        if (form.style.display === 'block') {
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
        }
	};

	// Attach a submit event listener to each edit form on the page
	editPostForm.forEach((form) => {
		form.addEventListener('submit', async (event) => {
			// Prevent the default form submission behavior
			event.preventDefault();

			// Extracts unique ID of the post associated with the thumbnail. 
			const postId = form.getAttribute('data-post-id');
			const title = document.querySelector(`#post-title-${postId}`).value.trim();
			const content = document.querySelector(`#post-content-${postId}`).value.trim();

			// Check if both title and content are provided
			if (title && content) {
				// Send a PUT request to update the post
				const response = await fetch(`/api/posts/${postId}`, {
					method: 'PUT',
					body: JSON.stringify({ title, content }),
					headers: { 'Content-Type': 'application/json' }
				});

				// Reload the page to show the updated post if the request was successful
				if (response.ok) {
					document.location.reload();
				} else {
					// Alert the user if there was an error updating the post
					alert('Failed to update post.');
				}
			}
		});
	});

	// Additional event listeners for edit/delete actions can be added here
});
