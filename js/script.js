function menu() {
  var x = document.getElementById("navbar-elements");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

// Get the current year and update the copyright year
document.getElementById('copyright-year').textContent = new Date().getFullYear();

// Back to top button functionality
const backToTopBtn = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
