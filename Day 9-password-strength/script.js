function checkStrength() {
    const password = document.getElementById("password").value;
    const strengthBar = document.getElementById("strength");
    const message = document.getElementById("message");

    let strength = 0;

    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (password.length === 0) {
        strengthBar.style.width = "0";
        message.innerText = "";
        return;
    }

    if (strength <= 1) {
        strengthBar.style.width = "25%";
        strengthBar.style.background = "red";
        message.innerText = "Weak password ❌";
        message.style.color = "red";
    } else if (strength === 2 || strength === 3) {
        strengthBar.style.width = "60%";
        strengthBar.style.background = "orange";
        message.innerText = "Medium strength ⚠️";
        message.style.color = "orange";
    } else {
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
        message.innerText = "Strong password ✅";
        message.style.color = "lightgreen";
    }
}
