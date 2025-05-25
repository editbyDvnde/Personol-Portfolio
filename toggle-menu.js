document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.getElementById("navMenu");
  const overlay = document.getElementById("overlay");

  function toggleMenu() {
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  hamburger.addEventListener("click", function () {
    toggleMenu();
  });

  overlay.addEventListener("click", function () {
    toggleMenu(); // Menutup saat klik luar menu
  });

  // Optional: Tutup jika klik link di menu
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
});
