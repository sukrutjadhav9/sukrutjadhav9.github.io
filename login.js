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

    //
