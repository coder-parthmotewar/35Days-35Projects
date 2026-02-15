const note = document.getElementById("note");

note.value = localStorage.getItem("offline-note") || "";

note.addEventListener("input", () => {
  localStorage.setItem("offline-note", note.value);
});

// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
