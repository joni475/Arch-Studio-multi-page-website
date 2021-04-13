const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const close = document.querySelector(".close");
//overlay
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click",()=>{
 navLinks.classList.add("show");
 overlay.style.display = "block";
 close.classList.add("show");
 hamburger.style.visibility ="hidden";
});

close.addEventListener("click",()=>{
 navLinks.classList.remove("show");
 close.classList.remove("show");
 overlay.style.display ="none";
 hamburger.style.visibility ="visible";
});






let logo = document.querySelector(".nav-logo");
let footerLogo = document.querySelector(".footer-logo");

logo.addEventListener("click",()=>{
  location.href="index.html";
});

footerLogo.addEventListener("click",()=>{
   location.href="index.html";
});

let footerBtn = document.querySelector(".footer-btn");
footerBtn.addEventListener("click",()=> {
    location.href="portfolio.html";
  });

