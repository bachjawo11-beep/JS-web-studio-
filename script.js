// WEBSITE JS LOADED
console.log("Website JS Loaded");

// ========================
// DARK MODE
// ========================

const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
document.body.classList.add("light");
}

toggle.addEventListener("click", () => {
document.body.classList.toggle("light");

if (document.body.classList.contains("light")) {
localStorage.setItem("theme", "light");
} else {
localStorage.setItem("theme", "dark");
}
});

// ========================
// DYNAMIC PORTFOLIO
// ========================

const portfolioGrid = document.getElementById("portfolioGrid");

projects.forEach(project => {
portfolioGrid.innerHTML += `
<div class="project">
<img src="${project.image}" alt="${project.name}">
<div class="overlay">
<h3>${project.name}</h3>
</div>
</div>
`;
});

// ========================
// SCROLL ANIMATION
// ========================

const cards = document.querySelectorAll(".card, .project");

cards.forEach(card => {
card.style.opacity = "0";
card.style.transform = "translateY(40px)";
card.style.transition = "0.6s ease";
});

window.addEventListener("scroll", () => {
cards.forEach(card => {
const top = card.getBoundingClientRect().top;

if (top < window.innerHeight - 100) {
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}
});
});

// ========================
// CONTACT FORM + WHATSAPP
// ========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const business = document.getElementById("business").value;
const message = document.getElementById("message").value;

const whatsappMessage =
`Hello JS Web Studio

Name: ${name}
Email: ${email}
Business: ${business}

Project Details:
${message}`;

const whatsappURL =
`https://wa.me/2207597080?text=${encodeURIComponent(whatsappMessage)}`;

console.log("Opening WhatsApp...");
console.log(whatsappURL);

window.location.href = whatsappURL;

form.reset();

});

// ========================
// HERO TYPING EFFECT
// ========================

const typing = document.getElementById("typing");

if (typing) {

const words = [
"Restaurants",
"Boutiques",
"Real Estate",
"Startups",
"Businesses"
];

let wordIndex = 0;

setInterval(() => {

typing.textContent = words[wordIndex];

wordIndex++;

if(wordIndex >= words.length){
wordIndex = 0;
}

}, 2000);

}

// ========================
// PROJECT MODAL
// ========================

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.getElementById("closeModal");

if(modal && modalTitle){

document.addEventListener("click", e => {

const project = e.target.closest(".project");

if(project){

const title =
project.querySelector("h3").textContent;

modalTitle.textContent = title;

modal.style.display = "flex";

}

});

}

if(closeModal){

closeModal.addEventListener("click", () => {

modal.style.display = "none";

});

}

// ========================
// MOBILE MENU
// ========================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {

nav.classList.toggle("active");
overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

nav.classList.remove("active");
overlay.classList.remove("active");

});

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", () => {

nav.classList.remove("active");
overlay.classList.remove("active");

});

});
