function checkDone() {
  let signUpButton = document.querySelector("#signup");
  let emailInput = document.querySelector("#email");
  let phoneInput = document.querySelector("#mobile");
  let passwordInput = document.querySelector("#password");
  let checkBox = document.querySelector("#agree");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phonePattern = /^077\d{7}$/;

  if (
    phonePattern.test(String(phoneInput.value)) &&
    emailPattern.test(emailInput.value) &&
    passwordPattern.test(passwordInput.value) &&
    checkBox.checked
  ) {
    signUpButton.removeAttribute("disabled");
  } else {
    signUpButton.disabled = "true";
  }
}

function passwordCorrect() {
  let passwordInput = document.querySelector("#password");
  let errorMessage = document.querySelector("#errPass");
  const capitalLetterPattern = /[A-Z]/;
  const lowerLetterPattern = /[a-z]/;
  const numberPattern = /\d/;
  const symbolPattern = /[!@#$%^&*(),.?":{}|<>]/;
  if (passwordInput.value.length < 8) {
    errorMessage.textContent = "Password must be 8 characters long";
  } else if (!capitalLetterPattern.test(passwordInput.value)) {
    errorMessage.textContent = "Password must contain a capital letter";
  } else if (!lowerLetterPattern.test(passwordInput.value)) {
    errorMessage.textContent = "Password must contain a lower letter";
  } else if (!numberPattern.test(passwordInput.value)) {
    errorMessage.textContent = "Password must contain a number";
  } else if (!symbolPattern.test(passwordInput.value)) {
    errorMessage.textContent = "Password must contain a special character";
  } else {
    errorMessage.textContent = "";
  }
}

function emailCorrect() {
  let emailInput = document.querySelector("#email");
  let errorMessage = document.querySelector("#errEmail");
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(emailInput.value)) {
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Please enter a valid email";
  }
}

function phoneCorrect() {
  let phoneInput = document.querySelector("#mobile");
  let errorMessage = document.querySelector("#errPhone");
  let phoneNumberPattern = /^077\d{6}$/;
  if (phoneNumberPattern.test(String(phoneInput.value))) {
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Please enter a valid number";
  }
}

function done() {
  let email = document.querySelector("#email").value;
  let number = document.querySelector("#mobile").value;
  let password = document.querySelector("#password").value;
  localStorage.setItem("email", email);
  localStorage.setItem("number", number);
  localStorage.setItem("password", password);
}
