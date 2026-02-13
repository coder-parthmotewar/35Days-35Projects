const searchInput = document.getElementById("searchInput");
const items = document.querySelectorAll("#itemList li");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();
  let found = false;

  items.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchValue)) {
      item.style.display = "block";
      found = true;
    } else {
      item.style.display = "none";
    }
  });

  noResult.style.display = found ? "none" : "block";
});
