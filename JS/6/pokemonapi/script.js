async function search() {
  document.querySelector("#result").remove();
  let div = document.createElement("div");
  div.id = "result";
  document.body.appendChild(div);
  let input = document.querySelector("#search").value;
  let response1 = await fetch("https://pokeapi.co/api/v2/pokemon-form");
  let jsonRes1 = await response1.json();
  for (let i = 0; i < jsonRes1.results.length; i += 1) {
    if (jsonRes1.results[i].name.startsWith(input)) {
      let response = await fetch(`${jsonRes1.results[i].url}`);
      let jsonRes = await response.json();
      let img = document.createElement("img");
      img.src = jsonRes.sprites.back_default;
      document.querySelector("#result").appendChild(img);
    }
  }
}
