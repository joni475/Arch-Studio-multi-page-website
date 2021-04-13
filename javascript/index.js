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


//automatic slides
// var slideIndex = 0;
// showSlides();

// function currentSlide(n){
//   showSlides(slideIndex = n);
// }

// function showSlides() {

//   let i;
//   let slidesAuto = document.querySelectorAll(".slide");
//   let dots = document.querySelectorAll(".dot");
//   for (i = 0; i < slidesAuto.length; i++) {
//     slidesAuto[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slidesAuto.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slidesAuto[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 4000); 
// }
        



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