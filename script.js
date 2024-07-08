// Event listener for showing the create account section
document.getElementById("create-account-toggle").addEventListener("click", function(event) {
    event.preventDefault();
    // Hide login form
    document.querySelector(".login-container").style.display = "none";
    // Show create account form
    document.querySelector(".create-account-container").style.display = "block";
});

// Event listener for back to login link on create account section
document.getElementById("login-link-create").addEventListener("click", function(event) {
    event.preventDefault();
    // Reset create account form fields (optional)
    document.getElementById("new-username").value = "";
    document.getElementById("new-password").value = "";
    document.getElementById("auth-code").value = "";

    // Hide create account form
    document.querySelector(".create-account-container").style.display = "none";
    // Show login form
    document.querySelector(".login-container").style.display = "block";
});

// Event listener for handling account creation
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
    // Reset create account form fields (optional)
    document.getElementById("new-username").value = "";
    document.getElementById("new-password").value = "";
    document.getElementById("auth-code").value = "";

    // Hide create account form
    document.querySelector(".create-account-container").style.display = "none";
    // Show login form
    document.querySelector(".login-container").style.display = "block";
});

// Event listener for back to login link/button on create account section
document.getElementById("back-to-login").addEventListener("click", function(event) {
    event.preventDefault();
    // Hide create account form
    document.querySelector(".create-account-container").style.display = "none";
    // Show login form
    document.querySelector(".login-container").style.display = "block";
});
