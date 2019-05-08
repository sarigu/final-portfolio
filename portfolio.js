let burgermenu = document.querySelector("#burgermenu");
let sidenav = document.querySelector(".sidenav");
let closeBtn = document.querySelector(".closebtn");

init();

function init() {
  burgermenu.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);
  document.querySelector("#contact").addEventListener("click", openContact);
}

function openNav() {
  sidenav.style.display = "block";
  sidenav.style.width = "100%";
}

function closeNav() {
  sidenav.style.width = "0%";
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
