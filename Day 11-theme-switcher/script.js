const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.innerText = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        toggleBtn.innerText = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.innerText = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
