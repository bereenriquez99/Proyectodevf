// Sticky shadow
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const btn = document.getElementById("backToTop");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    btn.style.display = "block";
  } else {
    header.classList.remove("scrolled");
    btn.style.display = "none";
  }
});

// Back to top
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Validación formulario
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  const message = document.getElementById("form-message");
  message.textContent = "Gracias, te contactaremos pronto.";
  this.reset();
});

// Mini cotización
document.querySelector(".mini-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Solicitud enviada. Te contactaremos pronto.");
  this.reset();
});
