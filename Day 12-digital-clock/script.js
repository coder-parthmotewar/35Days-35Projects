const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const toggleBtn = document.getElementById("toggleFormat");

let is24Hour = true;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    let session = "";

    if (!is24Hour) {
        session = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12;
    }

    hours = hours.toString().padStart(2, "0");
    timeEl.innerText = `${hours}:${minutes}:${seconds}${session}`;

    dateEl.innerText = now.toDateString();
}

toggleBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;
    toggleBtn.innerText = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
});

setInterval(updateClock, 1000);
updateClock();
