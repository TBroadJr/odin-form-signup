let submitButn = document.querySelector('button');

let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");


submitButn.addEventListener('click', () => {
  if (password.value === confirmPassword.value) {
    alert("Success");
  } else {
    alert("Passwords Do not match");
  }
});