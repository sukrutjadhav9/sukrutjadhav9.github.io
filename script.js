document.getElementById("create-account-toggle").addEventListener("click", function(event) {
    event.preventDefault();
    // Toggle display of create account section
    document.querySelector(".create-account-container").style.display = "block";
    // Hide login form
    document.querySelector(".login-container").style.display = "none";
});

document.getElementById("login-link").addEventListener("click", function(event) {
    event.preventDefault();
    // Hide create account section
    document.querySelector(".create-account-container").style.display = "none";
    // Show login form
    document.querySelector(".login-container").style.display = "block";
});

document.getElementById("login-link-create").addEventListener("click", function(event) {
    event.preventDefault();
    // Hide create account section
    document.querySelector(".create-account-container").style.display = "none";
    // Show login form
    document.querySelector(".login-container").style.display = "block";
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check if credentials match existing users in local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let authenticatedUser = users.find(user => user.username === username && user.password === password);

    if (authenticatedUser) {
        document.getElementById("login-message").textContent = "Login successful!";
        // Redirect or show logged-in content
        // Example: window.location.href = "/dashboard.html";
    } else {
        document.getElementById("login-message").textContent = "Invalid username or password.";
    }
});

document.getElementById("create-account-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let newUsername = document.getElementById("new-username").value;
    let newPassword = document.getElementById("new-password").value;
    let authCode = document.getElementById("auth-code").value;

    if (authCode !== "6447") {
        document.getElementById("create-account-message").textContent = "Invalid authentication code.";
        return;
    }

    // Check if username already exists
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let existingUser = users.find(user => user.username === newUsername);

    if (existingUser) {
        document.getElementById("create-account-message").textContent = "Username already exists.";
        return;
    }

    // Add new user to local storage
    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("create-account-message").textContent = "Account created successfully!";
    // After creating account, show the login form and hide create account form
    document.querySelector(".create-account-container").style.display = "none";
    document.querySelector(".login-container").style.display = "block";
});
