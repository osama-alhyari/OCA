localStorage.removeItem(`1`);
localStorage.removeItem(`2`);
localStorage.removeItem(`3`);
let total1 = 0;
let total2 = 0;
let total3 = 0;
let total;
function createItem(num, price) {
  if (localStorage.getItem(`${num}`)) {
    document.querySelector(`#numberInput${num}`).value =
      Number(document.querySelector(`#numberInput${num}`).value) + 1;
    document.querySelector(`#priceXquantity${num}`).textContent =
      price * Number(document.querySelector(`#numberInput${num}`).value);
    if (document.querySelector("#priceXquantity1")) {
      total1 = Number(document.querySelector("#priceXquantity1").textContent);
      console.log(document.querySelector("#priceXquantity2"));
    }
    if (document.querySelector("#priceXquantity2")) {
      total2 = Number(document.querySelector("#priceXquantity2").textContent);
    }
    if (document.querySelector("#priceXquantity3")) {
      total3 = Number(document.querySelector("#priceXquantity3").textContent);
    }
    document.querySelector("#totalCost").textContent = total1 + total2 + total3;
    return;
  }

  // Get the parent element by its ID
  let className = ".itemsList";
  const parent = document.querySelector(className);

  // Create the main div element
  const div = document.createElement("div");
  div.className = "itemInCart";

  // Create and append the img element
  const img = document.createElement("img");
  img.src = `${num}.jpg`;
  img.width = 100;
  img.height = 70;
  div.appendChild(img);

  // Create the input element
  const inputElement = document.createElement("input");

  // Set the type to number
  inputElement.type = "number";

  // Optionally, you can set other attributes like min, max, step, etc.
  inputElement.min = 1;
  inputElement.max = 10;
  inputElement.step = 1;
  inputElement.value = 1;

  // Set an id or class if you want to style it later
  inputElement.id = `numberInput${num}`;

  inputElement.addEventListener("change", function (event) {
    // Add your code here
    document.querySelector(`#priceXquantity${num}`).textContent =
      price * event.target.value;
    // sessionStorage.setItem(
    //   `total${num}`,
    //   `${Number(document.querySelector(`#priceXquantity${num}`).textContent)}`
    // );

    if (document.querySelector("#priceXquantity1")) {
      total1 = Number(document.querySelector("#priceXquantity1").textContent);
      console.log(document.querySelector("#priceXquantity2"));
    }
    if (document.querySelector("#priceXquantity2")) {
      total2 = Number(document.querySelector("#priceXquantity2").textContent);
    }
    if (document.querySelector("#priceXquantity3")) {
      total3 = Number(document.querySelector("#priceXquantity3").textContent);
    }
    document.querySelector("#totalCost").textContent = total1 + total2 + total3;
    // You can replace the console.log with any other code you want to execute on change
  });

  // Append the input element to the div with id 'input-container'
  div.appendChild(inputElement);

  // Create and append the paragraph element
  const p = document.createElement("p");
  p.id = `priceXquantity${num}`;
  p.textContent = price;
  div.appendChild(p);

  // Create and append the second img element
  const img2 = document.createElement("img");
  img2.src = "x.png";

  img2.addEventListener("click", function (event) {
    // Add your code here
    localStorage.removeItem(`${num}`);
    sessionStorage.removeItem(`total${num}`);
    total =
      total1 +
      total2 +
      total3 -
      Number(document.querySelector(`#priceXquantity${num}`).textContent);
    document.querySelector("#totalCost").textContent = total;
    this.parentNode.remove();
    // You can replace the console.log with any other code you want to execute on change
  });

  div.appendChild(img2);

  // Append the main div to the parent element
  parent.appendChild(div);
  localStorage.setItem(`${num}`, true);
  if (document.querySelector("#priceXquantity1")) {
    total1 = Number(document.querySelector("#priceXquantity1").textContent);
    console.log(document.querySelector("#priceXquantity2"));
  }
  if (document.querySelector("#priceXquantity2")) {
    total2 = Number(document.querySelector("#priceXquantity2").textContent);
  }
  if (document.querySelector("#priceXquantity3")) {
    total3 = Number(document.querySelector("#priceXquantity3").textContent);
  }
  document.querySelector("#totalCost").textContent = total1 + total2 + total3;
}
