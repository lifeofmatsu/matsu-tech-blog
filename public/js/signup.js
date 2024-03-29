document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.querySelector('#signup-form');

    signUpForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.querySelector('#username').value.trim();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();

        if (username && email && password) {
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ username, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to sign up.');
            }
        }
    });
});
