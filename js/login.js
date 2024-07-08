document.getElementById('create-account-toggle').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.create-account-container').style.display = 'block';
});

document.getElementById('back-to-login').addEventListener('click', function() {
    document.querySelector('.create-account-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy login validation (replace with your own logic)
    if (username === "admin" && password === "password") {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        document.getElementById('login-message').textContent = "Invalid credentials!";
    }
});

document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const authCode = document.getElementById('auth-code').value;

    // Dummy account creation validation (replace with your own logic)
    if (authCode === "6447") {
        localStorage.setItem(newUsername, newPassword);
        document.getElementById('create-account-message').textContent = "Account created successfully!";
        document.querySelector('.create-account-container').style.display = 'none';
        document.querySelector('.login-container').style.display = 'block';
    } else {
        document.getElementById('create-account-message').textContent = "Invalid authentication code!";
    }
});
