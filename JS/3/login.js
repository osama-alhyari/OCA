function welcomeAlert() {
  let credEmail = document.querySelector("#email").value;
  let credPassword = document.querySelector("#password").value;
  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password");
  if (email === credEmail && password === credPassword) {
    alert("you have logged in");
  } else {
    alert("wrong email or password");
  }
}
