//variables

let modal = document.querySelector(".modal");
let btn = document.querySelector(".btn");
let close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
