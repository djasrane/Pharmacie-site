document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Merci pour votre message ! Nous vous contacterons bientôt.");
  this.reset();
});
function envoyerWhatsApp() {
  const note = document.getElementById('note').value;
  const numero = '+23560729112';
  const message = encodeURIComponent(note);
  const url = `https://wa.me/${+23560729112}?text=${message}`;
  window.open(url, '_blank');
}
