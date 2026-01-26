let isSignup = false;

function toggleForm() {
    isSignup = !isSignup;

    document.getElementById("title").innerText = isSignup ? "Sign Up" : "Login";
    document.querySelector("button").innerText = isSignup ? "Sign Up" : "Login";
    document.querySelector(".toggle").innerHTML = isSignup
        ? 'Already have an account? <span onclick="toggleForm()">Login</span>'
        : 'Don’t have an account? <span onclick="toggleForm()">Sign up</span>';

    document.getElementById("name").classList.toggle("hidden");
    document.getElementById("error").innerText = "";
}

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (email === "" || password === "" || (isSignup && name === "")) {
        error.innerText = "Please fill all required fields";
        return;
    }

    if (!email.includes("@")) {
        error.innerText = "Enter a valid email";
        return;
    }

    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters";
        return;
    }

    alert(isSignup ? "Signup Successful!" : "Login Successful!");
});
