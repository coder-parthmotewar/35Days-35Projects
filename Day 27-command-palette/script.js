const palette = document.getElementById("palette");
const search = document.getElementById("search");
const items = document.querySelectorAll("#commands li");

let index = 0;

document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();
    palette.classList.toggle("hidden");
    search.focus();
  }

  if (palette.classList.contains("hidden")) return;

  if (e.key === "ArrowDown") {
    index = (index + 1) % items.length;
    updateActive();
  }

  if (e.key === "ArrowUp") {
    index = (index - 1 + items.length) % items.length;
    updateActive();
  }

  if (e.key === "Enter") {
    alert("Executed: " + items[index].innerText);
    palette.classList.add("hidden");
  }

  if (e.key === "Escape") {
    palette.classList.add("hidden");
  }
});

function updateActive() {
  items.forEach(item => item.classList.remove("active"));
  items[index].classList.add("active");
}

updateActive();
