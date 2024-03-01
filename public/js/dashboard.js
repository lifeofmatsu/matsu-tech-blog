document.addEventListener('DOMContentLoaded', () => {
    const newPostForm = document.querySelector('#new-post-form');

    newPostForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Assuming your form has title and content input fields
        const title = document.querySelector('#post-title').value.trim();
        const content = document.querySelector('#post-content').value.trim();

        if (title && content) {
            const response = await fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify({ title, content }),
                headers: { 'Content-Type': 'application/json' },
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
