const list = document.getElementById("list");

chrome.storage.local.get(null, data => {
  for (let site in data) {
    const li = document.createElement("li");
    const seconds = Math.floor(data[site] / 1000);
    li.textContent = `${site}: ${seconds}s`;
    list.appendChild(li);
  }
});
