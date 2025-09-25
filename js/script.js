// ==================== NAVBAR HIDE ON SCROLL ====================
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos < currentScrollPos) {
    // Scroll ke bawah → sembunyikan navbar
    navbar.classList.add("hide");
  } else {
    // Scroll ke atas → tampilkan navbar
    navbar.classList.remove("hide");
  }
  prevScrollPos = currentScrollPos;
});

// ==================== TOGGLE MENU (MOBILE) ====================
const menu = document.querySelector(".navbar-nav");
const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("active"); // tambahkan CSS .active di style.css
});

// ==================== TEKS BERGANTI (HERO) ====================
const changingText = document.getElementById("changing-text");
const textArray = ["Web Developer.", "UI/UX Designer.", "Graphic Designer."]; 
let textIndex = 0;

setInterval(() => {
  changingText.style.opacity = 0;

  setTimeout(() => {
    textIndex = (textIndex + 1) % textArray.length;
    changingText.textContent = textArray[textIndex];
    changingText.style.opacity = 1;
  }, 500);
}, 1500);

// ==================== FORM CONTACT (DEMO SAJA) ====================
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Terima kasih! Pesanmu sudah terkirim 😊");

  // Reset form
  contactForm.reset();
});
