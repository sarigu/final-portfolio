let project1 = document.querySelector("#project1 img");
let project2 = document.querySelector("#project2 img");
let project3 = document.querySelector("#project3 img");
let project4 = document.querySelector("#project4 img");
let project5 = document.querySelector("#project5 img");

function init() {
  document.querySelector("#contact").addEventListener("click", openContact);
  project1.addEventListener("click", openProject);
  project2.addEventListener("click", openProject);
  project3.addEventListener("click", openProject);
  project4.addEventListener("click", openProject);
  project5.addEventListener("click", openProject);
}

function openContact(e) {
  e.preventDefault();
  document.querySelector("#contactmodal").style.display = "block";
  document.querySelector(".close").addEventListener("click", closeModal);
}

function closeModal() {
  document.querySelector("#contactmodal").style.display = "none";
}

function openProject(event) {
  console.log(event.target);
  if (event.target == project1) {
    window.open("harrypotter.html", "_self");
  } else if (event.target == project2) {
    window.open("volt.html", "_self");
  } else if (event.target == project3) {
    window.open("todo.html", "_self");
  } else if (event.target == project4) {
    window.open("tokyo.html", "_self");
  } else if (event.target == project5) {
    window.open("kogi.html", "_self");
  }
}
init();
