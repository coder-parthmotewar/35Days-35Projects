const palette = document.getElementById("palette");

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generateColors() {
  palette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = randomColor();
    const box = document.createElement("div");

    box.className = "color-box";
    box.style.background = color;
    box.innerText = color;

    box.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      alert(`Copied ${color}`);
    });

    palette.appendChild(box);
  }
}

generateColors();
