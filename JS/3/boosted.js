let idCount;
if (localStorage.getItem(idCount)) {
  idCount = localStorage.getItem(idCount);
} else {
  idCount = 1;
}

let users;
if (localStorage.getItem(users)) {
  users = localStorage.getItem(users);
} else {
  users = [];
}

function checkDone() {
  let signUpButton = document.querySelector("#signup");
  let emailInput = document.querySelector("#email");
  let phoneInput = document.querySelector("#mobile");
  let passwordInput = document.querySelector("#password");
  let nameInput = document.querySelector("#name");
  let checkBox = document.querySelector("#agree");
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let phonePattern = /^077\d{7}$/;
  let namePattern = /^[A-Za-z]+ [A-Za-z]+$/;
  let confirmInput = document.querySelector("#confirm");

  if (
    phonePattern.test(String(phoneInput.value)) &&
    emailPattern.test(emailInput.value) &&
    passwordPattern.test(passwordInput.value) &&
    namePattern.test(nameInput.value) &&
    checkBox.checked &&
    confirmInput.value === passwordInput.value
  ) {
    signUpButton.removeAttribute("disabled");
  } else {
    signUpButton.disabled = "true";
  }
}

function nameCorrect() {
  let errorMessage = document.querySelector("#errName");
  let namePattern = /^[A-Za-z]+ [A-Za-z]+$/;
  let nameInput = document.querySelector("#name");
  if (namePattern.test(nameInput.value)) {
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Please enter your name";
  }
}

function passwordCorrect() {
  let passwordInput = document.querySelector("#password");
  let errorMessage = document.querySelector("#errPass");
  let capitalLetterPattern = /[A-Z]/;
  let lowerLetterPattern = /[a-z]/;
  let numberPattern = /\d/;
  let symbolPattern = /[!@#$%^&*(),.?":{}|<>]/;
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
  let phoneNumberPattern = /^077\d{7}$/;
  if (phoneNumberPattern.test(String(phoneInput.value))) {
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Please enter a valid number";
  }
}

function confirmCorrect() {
  let confirmInput = document.querySelector("#confirm");
  let errorMessage = document.querySelector("#errConfirm");
  if (confirmInput.value === document.querySelector("#password").value) {
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Passwords must match";
  }
}

function done() {
  let email = document.querySelector("#email").value;
  let number = document.querySelector("#mobile").value;
  let password = document.querySelector("#password").value;
  let name = document.querySelector("#name").value;
  let id = idCount;
  idCount += 1;
  let newUser = { id, name, email, number, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("idCount", idCount);
}

function myLocation() {
  window.location = "http://127.0.0.1:5500/login.html";
}
