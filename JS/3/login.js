function checkCreds(e) {
  e.preventDefault();
  let users = localStorage.getItem("users");
  console.log(users);
  users = JSON.parse(users);
  console.log(users);
  email = document.querySelector("#email").value;
  password = document.querySelector("#password").value;
  let found = false;
  for (let i = 0; i < users.length; i += 1) {
    if (email === users[i].email && password === users[i].password) {
      sessionStorage.setItem("id", `${users[i].id}`);
      sessionStorage.setItem("name", `${users[i].name}`);
      found = true;
      console.log(users[i]);
      break;
    }
  }
  if (found) {
    window.location = "http://127.0.0.1:5500/JS/3/page.html";
  } else {
    alert("wrong email or password");
  }
}
