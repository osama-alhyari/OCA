function keyPress() {
  document.querySelector("#message").textContent =
    document.querySelector("#inputt").value;
}

function sendMessage() {
  if (document.querySelector("#inputt").value === "") {
    return;
  }
  var ul = document.querySelector("#list");
  var li = document.createElement("li");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", document.querySelector("#inputt").value, true);

  // Set up a function to handle the response data
  xhr.onloadend = function () {
    li.appendChild(document.createTextNode(`${xhr.responseURL.substring(27)}`));
    ul.appendChild(li);
    document.querySelector("#inputt").value = "";
    document.querySelector("#message").textContent = "";
  };
  xhr.send();
}
