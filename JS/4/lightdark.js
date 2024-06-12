if (sessionStorage.theme) {
  document.querySelector("body").style.backgroundColor = sessionStorage.theme;
}

function makeDark() {
  document.querySelector("body").style.backgroundColor = "#333333";
  sessionStorage.setItem("theme", "#333333");
}

function makeDefault() {
  document.querySelector("body").style.backgroundColor = "skyblue";
  sessionStorage.setItem("theme", "skyblue");
}

function makeLight() {
  document.querySelector("body").style.backgroundColor = "#cccccc";
  sessionStorage.setItem("theme", "#cccccc");
}
