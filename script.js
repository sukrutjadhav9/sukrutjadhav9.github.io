// DOM elements
const loginSection = document.getElementById("login-section");
const dashboardSection = document.getElementById("dashboard-section");
const loginForm = document.getElementById("login-form");
const createAccountForm = document.getElementById("create-account-form");
const createAccountToggle = document.getElementById("create-account-toggle");
const backToLoginLink = document.getElementById("back-to-login");
const logoutLink = document.getElementById("logout-link");
const homeLink = document.getElementById("home-link");

// Event listener for showing the create account section
createAccountToggle.addEventListener("click", function(event) {
    event.preventDefault();
    showCreateAccountForm();
});

// Event listener for handling account creation
createAccountForm.addEventListener("submit", function(event) {
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
    hideCreateAccountForm();
});

// Event listener for showing the login section
backToLoginLink.addEventListener("click", function(event) {
    event.preventDefault();
    showLoginForm();
});

// Event listener for handling login
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Retrieve users from local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let authenticatedUser = users.find(user => user.username === username && user.password === password);

    if (authenticatedUser) {
        // Login successful, show dashboard
        showDashboard();
        document.getElementById("login-message").textContent = "";
    } else {
        // Login failed
        document.getElementById("login-message").textContent = "Invalid username or password.";
    }
});

// Logout functionality
logoutLink.addEventListener("click", function(event) {
    event.preventDefault();
    logout();
});

// Home link behavior
homeLink.addEventListener("click", function(event) {
    event.preventDefault();
    showDashboard();
});

// Function to show create account form and hide login form
function showCreateAccountForm() {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".create-account-container").style.display = "block";
}

// Function to hide create account form and show login form
function hideCreateAccountForm() {
    document.querySelector(".create-account-container").style.display = "none";
    document.querySelector(".login-container").style.display = "block";
}

// Function to show login form and hide create account form
function showLoginForm() {
    document.querySelector(".create-account-container").style.display = "none";
    document.querySelector(".login-container").style.display = "block";
}

// Function to show dashboard and hide login section
function showDashboard() {
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
}

// Function to logout and show login section
function logout() {
    dashboardSection.style.display = "none";
    loginSection.style.display = "block";
}
