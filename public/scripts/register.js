// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

document.querySelectorAll(".signIn").forEach(element => {
  element.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".card-title").textContent = "Sign In";
  document.querySelector("#registerDiv").classList.add('d-none');
  document.querySelector("#signInDiv").classList.remove('d-none');
});
});
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#register").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".card-title").textContent = "Registration Form";
  document.querySelector("#registerDiv").classList.remove('d-none');
  document.querySelector("#signInDiv").classList.add('d-none');
});