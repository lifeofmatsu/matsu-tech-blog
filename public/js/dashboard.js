document.addEventListener('DOMContentLoaded', () => {
	const newPostButton = document.querySelector('#newPostButton');
    const newPostForm = document.querySelector('#newPostForm');
    const postHistoryButton = document.querySelector('#editPostButton');

    // Listens for button click to display new blog post form
	newPostButton.addEventListener('click', () => {
		const form = document.getElementById('newPostForm');
		if (form.style.display === 'none') {
			form.style.display = 'block';
		} else {
			form.style.display = 'none';
		}
	});

    // Listens for blog post form submission to create new post
	newPostForm.addEventListener('submit', async (event) => {
		event.preventDefault();

		const title = document.querySelector('#post-title').value.trim();
		const content = document.querySelector('#post-content').value.trim();

		if (title && content) {
			const response = await fetch('/api/posts', {
				method: 'POST',
				body: JSON.stringify({ title, content }),
				headers: { 'Content-Type': 'application/json' }
			});

			if (response.ok) {
				document.location.reload();
			} else {
				alert('Failed to create post.');
			}
		}
	});

	// Additional event listeners for edit/delete actions can be added here
});
