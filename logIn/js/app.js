document.querySelector('.button').onclick = function () {
  var password = document.querySelector('.password').ariaValueMax,
    confirmPassword = document.querySelector('.confirmPassword').ariaValueMax;

  if (password == "") {
    alert("Field cannot be empty.")
  }
}