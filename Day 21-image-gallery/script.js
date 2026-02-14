const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

function openModal(src) {
  modal.style.display = "flex";
  modalImg.src = src;
}

function closeModal() {
  modal.style.display = "none";
}
