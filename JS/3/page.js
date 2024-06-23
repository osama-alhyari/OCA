if (sessionStorage.getItem("name")) {
  document.querySelector(
    "#signedIn"
  ).textContent = `Hello ${sessionStorage.getItem("name")}`;
  document.querySelector("#logOut").style.display = "block";
}

function logOut() {
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("id");
  window.location = "http://127.0.0.1:5500/JS/3/page.html";
}
