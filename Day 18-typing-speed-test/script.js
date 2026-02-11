const text = document.getElementById("text").innerText;
const input = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");

let startTime, timer;

input.addEventListener("input", () => {
  if (!startTime) {
    startTime = new Date();
    timer = setInterval(updateTime, 1000);
  }

  calculateStats();

  if (input.value === text) {
    clearInterval(timer);
  }
});

function updateTime() {
  const elapsed = Math.floor((new Date() - startTime) / 1000);
  timeEl.innerText = elapsed;
}

function calculateStats() {
  const elapsed = (new Date() - startTime) / 1000;
  const words = input.value.trim().split(" ").length;
  const wpm = Math.floor((words / elapsed) * 60) || 0;
  wpmEl.innerText = wpm;

  let correct = 0;
  for (let i = 0; i < input.value.length; i++) {
    if (input.value[i] === text[i]) correct++;
  }

  const accuracy = Math.floor((correct / text.length) * 100) || 0;
  accuracyEl.innerText = accuracy;
}

function restartTest() {
  input.value = "";
  startTime = null;
  timeEl.innerText = 0;
  wpmEl.innerText = 0;
  accuracyEl.innerText = 0;
  clearInterval(timer);
}
