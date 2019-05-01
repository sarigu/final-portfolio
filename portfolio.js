function init() {
  document.querySelector("#contact").addEventListener("click", openContact);
}

function openContact(e) {
  console.log("hallo");
  e.preventDefault();
  document.querySelector("#contactmodal").style.display = "block";
  document.querySelector(".close").addEventListener("click", closeModal);
}

function closeModal() {
  document.querySelector("#contactmodal").style.display = "none";
}

init();
