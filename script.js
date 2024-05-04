document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "admin" && password === "admin") {
        alert("flag{welcome_to_web101}");
        // Redirect to another page or dashboard here
    } else {
        document.getElementById('errorMsg').textContent = "Invalid username or password!";
    }
});

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggleButton = event.target;
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show";
    }
}

