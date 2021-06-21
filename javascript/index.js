const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const close = document.querySelector(".close");
const body = document.querySelector("body");
//overlay
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click",()=>{
 navLinks.classList.add("show");
 overlay.classList.add("show");
 close.classList.add("show");
 hamburger.style.visibility ="hidden";
 body.style.overflow = "hidden";
});

close.addEventListener("click",()=>{
 navLinks.classList.remove("show");
 close.classList.remove("show");
overlay.classList.remove("show");
 hamburger.style.visibility ="visible";
 body.style.overflow = "auto";
});


    

var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
 








 //event listners

for(let i=0; i < document.querySelectorAll(".btn-head").length; i++){
  document.querySelectorAll(".btn-head")[i].addEventListener("click", ()=>{        
    location.href="portfolio.html";
  })
}
   

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

let btnFeatured = document.querySelector(".btn-featured");
btnFeatured.addEventListener("click",()=>{
  location.href="portfolio.html";
});

let btnIdeas = document.querySelector(".btn-ideas");
btnIdeas.addEventListener("click",()=>{
 location.href="about.html";
});

// 

let portfolioOne = document.querySelector(".featured-project-one");
let portofolioTwo = document.querySelector(".featured-project-two");
let portofolioThree = document.querySelector(".featured-project-three");

portfolioOne.addEventListener("click",()=>{
 location.href="portfolio.html";
});
portofolioTwo.addEventListener("click",()=>{
  location.href="portfolio.html";
});
portofolioThree.addEventListener("click",()=>{
 location.href="portfolio.html";
});