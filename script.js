document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Define allowed users and their passwords (you can extend this list)
    const users = [
        { username: "sukrut", password: "sukrut2" },
        { username: "user2", password: "password2" }
        // Add more users as needed
    ];

    // Get input values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check if credentials match
    let authenticatedUser = users.find(user => user.username === username && user.password === password);

    if (authenticatedUser) {
        // Successful login
        document.getElementById("login-message").textContent = "Login successful!";
        // Redirect or show logged-in content
        // Example: window.location.href = "/dashboard.html";
    } else {
        // Failed login
        document.getElementById("login-message").textContent = "Invalid username or password.";
    }
});
