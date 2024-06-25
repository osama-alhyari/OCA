async function search() {
  console.log("start");
  let li;
  let img;
  let p;

  var ul = document.querySelector("#list");
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${
      document.querySelector("#search").value
    }&key=AIzaSyAn6PMksTdus8dF2i577GRPmujFYHPOiKs`
  );
  const data = await response.json();
  for (let i = 0; i < data.items.length; i += 1) {
    li = document.createElement("li");
    img = document.createElement("img");
    img.src = data.items[i].snippet.thumbnails.default.url;
    p = document.createElement("p");
    p.textContent = data.items[i].snippet.title;
    li.appendChild(img);
    li.appendChild(p);
    ul.appendChild(li);
  }
}
