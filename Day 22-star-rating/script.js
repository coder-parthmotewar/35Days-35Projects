const stars = document.querySelectorAll(".star");
const ratingEl = document.getElementById("rating");
let currentRating = 0;

stars.forEach(star => {
  star.addEventListener("mouseover", () => {
    highlightStars(star.dataset.value);
  });

  star.addEventListener("click", () => {
    currentRating = star.dataset.value;
    ratingEl.innerText = currentRating;
  });

  star.addEventListener("mouseout", () => {
    highlightStars(currentRating);
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    star.classList.toggle("active", star.dataset.value <= rating);
  });
}

function resetRating() {
  currentRating = 0;
  ratingEl.innerText = 0;
  highlightStars(0);
}
