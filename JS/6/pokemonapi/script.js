async function search() {
  let input = document.querySelector("#search").value;
  let response = await fetch("https://pokeapi.co/api/v2/pokemon-form");
  let jsonRes = await response.json();
  for (let i = 0; i < jsonRes.results.length; i += 1) {
    if (input === jsonRes.results[i].name) {
      response = await fetch(`${jsonRes.results[i].url}`);
      jsonRes = await response.json();
      let img = document.createElement("img");
      img.src = jsonRes.sprites.back_default;
      document.querySelector("#result").appendChild(img);
      return;
    }
  }
  document.querySelector("#result").textContent =
    "No Pokemon with this name found";
}
