document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Simulate login logic (replace with actual validation or API call)
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        // Successful login
        document.getElementById("login-message").textContent = "Login successful!";
        // Redirect or show logged-in content
        // Example: window.location.href = "/dashboard.html";
    } else {
        // Failed login
        document.getElementById("login-message").textContent = "Invalid username or password.";
    }
});
