const data = [
  "JavaScript for Beginners",
  "Advanced JavaScript Concepts",
  "Frontend Developer Roadmap",
  "Backend with Node.js",
  "Full Stack Web Development",
  "JavaScript Search Engine",
  "Learning Data Structures"
];

const searchInput = document.getElementById("search");
const results = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  results.innerHTML = "";

  if (!query) return;

  const ranked = data
    .map(item => {
      const text = item.toLowerCase();
      let score = 0;

      if (text.includes(query)) score += 10;
      score += text.split(query).length - 1;

      return { item, score };
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score);

  ranked.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r.item;
    results.appendChild(li);
  });
});
