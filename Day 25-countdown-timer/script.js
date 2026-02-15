let interval;

function startCountdown() {
  clearInterval(interval);

  const input = document.getElementById("dateTime").value;
  const message = document.getElementById("message");

  if (!input) {
    message.innerText = "Please select a date & time";
    return;
  }

  const targetDate = new Date(input).getTime();

  interval = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(interval);
      message.innerText = "🎉 Countdown Completed!";
      updateTimer(0, 0, 0, 0);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    updateTimer(days, hours, minutes, seconds);
    message.innerText = "";
  }, 1000);
}

function updateTimer(d, h, m, s) {
  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
}
