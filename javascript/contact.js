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

 // submit form

 const form = document.getElementById("form");
 const username = document.getElementById("name");
 const email = document.getElementById("email");
 const message = document.getElementById("message");


 form.addEventListener("submit", (e)=> {
   e.preventDefault();
   checkInputs();
   
 });

 
 function checkInputs(){
  const usernameValue =username.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

   if(usernameValue === ""){
     setErrorFor(username, "Can't be empty");
   } else {
     setSuccessFor(username);
   }

   if(emailValue === ""){
    setErrorFor(email, "Can't be empty");
  } else {
    setSuccessFor(email);
  }

  if(messageValue === ""){
    setErrorFor(message, "Can't be empty");
  } else {
    setSuccessFor(message);
  }
 };
 
  function setErrorFor(input, message) {
     const formControl = input.parentElement;
     const small = formControl.querySelector("small");

     small.innerText = message;
     formControl.className = "form-control error";
  }
  
 function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = "form-control success";
 }



 // map  
 
 let map = L.map("map").setView([35.7, -90.47], 5);

 L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=ElhiTY9XmHHwVWKj6niG", {
   attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);
let mainOffice = L.marker([35.7, -90.47]).addTo(map);
let officeTwo = L.marker([33.9, -98.6]).addTo(map);

let officeOne = document.querySelector(".view-office-map-one");
let officetwo = document.querySelector(".view-office-map-two");

officeOne.addEventListener("click",()=>{
  let mainOffice = L.marker([35.7, -90.47]).addTo(map);
  let mainOfficeCircle = L.circle([35.7, -90.47], {
    color: 'black',
    fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 100000
  }).addTo(map);
});
officetwo.addEventListener("click",()=>{
  let officeTwo = L.marker([33.9, -98.6]).addTo(map);
  let officeTwoCircle = L.circle([33.9, -98.6], {
    color: 'black',
    fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 100000
  }).addTo(map);
});