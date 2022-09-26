// console.clear();

// const app = (() => {
//   let body;
//   let menu;
//   let menuItems;

//   const init = () => {
//     body = document.querySelector('body');
//     menu = document.querySelector('.menu-icon');
//     menuItems = document.querySelectorAll('.nav__list-item');

//     applyListeners();
//   };

//   const applyListeners = () => {
//     menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
//   };

//   const toggleClass = (element, stringClass) => {
//     if (element.classList.contains(stringClass))
//     element.classList.remove(stringClass);else

//     element.classList.add(stringClass);
//   };

//   init();
// })();








const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}








// Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("modal")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }




























