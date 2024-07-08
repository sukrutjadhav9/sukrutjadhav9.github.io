// Event listener for login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Retrieve users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username and password match
    let authenticatedUser = users.find(user => user.username === username && user.password === password);

    if (authenticatedUser) {
        // Display main page or redirect to main page
        document.body.innerHTML = `
            <nav class="navbar">
                <ul>
                    <li><a href="#" id="home-link">Home</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">GS1</a>
                        <div class="dropdown-content">
                            <a href="#">History</a>
                            <a href="#">Geography</a>
                            <a href="#">Indian Society</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">GS2</a>
                        <div class="dropdown-content">
                            <a href="#">Polity</a>
                            <a href="#">Welfare</a>
                            <a href="#">Governance</a>
                            <a href="#">IR Diplomacy</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">GS3</a>
                        <div class="dropdown-content">
                            <a href="#">Economy</a>
                            <a href="#">Food/Agri</a>
                            <a href="#">Environment</a>
                            <a href="#">Security and Disaster Management</a>
                            <a href="#">Science and Technology</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">GS4</a>
                        <div class="dropdown-content">
                            <!-- Add GS4 topics here -->
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn">OPTIONAL</a>
                        <div class="dropdown-content">
                            <!-- Add OPTIONAL subjects here -->
                        </div>
                    </li>
                </ul>
            </nav>
        
            <!-- Todo List -->
            <div class="todo-container">
                <h2>Daily Todo List</h2>
                <ul id="todo-list">
                    <!-- Todo items will be dynamically added here -->
                </ul>
                <form id="todo-form">
                    <input type="text" id="todo-input" placeholder="Enter your todo...">
                    <button type="submit">Add</button>
                </form>
            </div>
        `;

        // Add event listener for todo form submission
        document.getElementById("todo-form").addEventListener("submit", function(event) {
            event.preventDefault();
            let todoInput = document.getElementById("todo-input");
            let todoText = todoInput.value.trim();

            if (todoText !== "") {
                addTodoItem(todoText);
                todoInput.value = "";
            }
        });

    } else {
        // Show error message for invalid login
        document.getElementById("login-message").textContent = "Invalid username or password.";
    }
});

// Function to add a new todo item
function addTodoItem(todoText) {
    let todoList = document.getElementById("todo-list");
    let li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);
}

// Event listener for showing the create account section
document.getElementById("create-account-toggle").addEventListener("click", function(event) {
    event.preventDefault();
    // Hide login form
    document.querySelector(".login-container").style.display = "none";
    // Show create account form
    document.querySelector(".create-account-container").style.display = "block";
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

// Event listener for showing the login section
document.getElementById("back-to-login").addEventListener("click", function(event) {
    event.preventDefault();
    // Hide create account form
    document.querySelector(".create-account-container").style.display = "none";
    // Show login form
    document.querySelector(".login-container").style.display = "block";
});
