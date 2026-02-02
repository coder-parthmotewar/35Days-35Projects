const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirmPassword");

    document.querySelectorAll("small").forEach(s => s.innerText = "");

    if (name.value.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById("emailError").innerText = "Enter valid email";
        isValid = false;
    }

    if (password.value.length < 6) {
        document.getElementById("passwordError").innerText = "Minimum 6 characters";
        isValid = false;
    }

    if (password.value !== confirm.value) {
        document.getElementById("confirmError").innerText = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMsg").innerText = "Registration Successful 🎉";
        form.reset();
    }
});
