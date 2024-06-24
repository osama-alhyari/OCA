window.addEventListener("DOMContentLoaded", async () => {
  await getData();
});

let ammanTemp;
let parisTemp;
let londonTemp;

async function getData() {
  const ammanCall = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Amman&appid=995e406ac7417e3ed1b85820a4eb0aa7"
  );
  const ammanJson = await ammanCall.json();
  ammanTemp = Math.floor(Number(ammanJson.main.temp) - 273);

  const parisCall = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=995e406ac7417e3ed1b85820a4eb0aa7"
  );
  const parisJson = await parisCall.json();
  parisTemp = Math.floor(Number(parisJson.main.temp) - 273);

  const londonCall = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=995e406ac7417e3ed1b85820a4eb0aa7"
  );

  const londonJson = await londonCall.json();
  londonTemp = Math.floor(Number(londonJson.main.temp) - 273);
}

function changeTemp() {
  let chosen = document.querySelector("#dropdown").value;
  switch (true) {
    case chosen === "Amman":
      document.querySelector("#goal").textContent = `${ammanTemp}°C`;
      break;
    case chosen === "Paris":
      document.querySelector("#goal").textContent = `${parisTemp}°C`;
      break;
    case chosen === "London":
      document.querySelector("#goal").textContent = `${londonTemp}°C`;
      break;
  }
}
