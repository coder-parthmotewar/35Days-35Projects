const products = [
  { name: "JavaScript Course", tags: ["js", "frontend"] },
  { name: "React Mastery", tags: ["js", "frontend"] },
  { name: "Node.js Backend", tags: ["backend", "js"] },
  { name: "Python for Data", tags: ["python", "data"] },
  { name: "Machine Learning", tags: ["python", "data"] },
  { name: "System Design Basics", tags: ["backend", "architecture"] }
];

const userProfile = {};
const itemsDiv = document.getElementById("items");
const recList = document.getElementById("recommendations");

products.forEach(p => {
  const btn = document.createElement("button");
  btn.textContent = p.name;
  btn.onclick = () => likeItem(p);
  itemsDiv.appendChild(btn);
});

function likeItem(product) {
  product.tags.forEach(tag => {
    userProfile[tag] = (userProfile[tag] || 0) + 1;
  });
  recommend();
}

function recommend() {
  recList.innerHTML = "";

  const ranked = products
    .map(p => {
      let score = 0;
      p.tags.forEach(tag => {
        score += userProfile[tag] || 0;
      });
      return { ...p, score };
    })
    .filter(p => p.score > 0)
    .sort((a, b) => b.score - a.score);

  ranked.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} (score: ${p.score})`;
    recList.appendChild(li);
  });
}
