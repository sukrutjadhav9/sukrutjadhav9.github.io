// JavaScript for Login and Create Account functionality

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const createAccountForm = document.getElementById('create-account-form');
    const createAccountToggle = document.getElementById('create-account-toggle');
    const backToLogin = document.getElementById('back-to-login');

    createAccountToggle.addEventListener('click', function() {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('create-account-container').style.display = 'block';
    });

    backToLogin.addEventListener('click', function() {
        document.getElementById('create-account-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // Perform login authentication here
        if (username === 'your_username' && password === 'your_password') {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('homepage').style.display = 'block';
        } else {
            document.getElementById('login-message').textContent = 'Invalid username or password. Please try again.';
        }
    });

    createAccountForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;
        const authCode = document.getElementById('auth-code').value;
        // Perform account creation and authentication code validation here
        if (authCode === '6447') {
            // Save newUsername and newPassword somewhere (e.g., localStorage or server-side)
            document.getElementById('create-account-message').textContent = 'Account created successfully!';
            document.getElementById('create-account-form').reset();
        } else {
            document.getElementById('create-account-message').textContent = 'Invalid authentication code. Please try again.';
        }
    });
});
