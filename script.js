const form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  alert("Thank you for joining She Can Foundation! 💜");

  form.reset();
});
