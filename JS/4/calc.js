let numbers = "";
let operands = [];
let operators = [];
let total;
document.querySelector("#screen").textContent = "";

function buttonPress(press) {
  numbers += press;
  document.querySelector("#screen").textContent = numbers;
}

function operation(operator) {
  if (numbers !== "") {
    operands.push(numbers);
  }
  operators.push(operator);
  numbers = "";
}

function clear1() {
  numbers = "";
  operands = [];
  operators = [];
  document.querySelector("#screen").textContent = "";
}

function equal() {
  // if ([operands.length === 0]) {
  //   return;
  // }
  total = Number(operands[0]);
  operands.push(numbers);
  for (let i = 0; i < operators.length; i += 1) {
    switch (true) {
      case operators[i] === "+":
        total += Number(operands[i + 1]);
        continue;
      case operators[i] === "-":
        total -= Number(operands[i + 1]);
        continue;
      case operators[i] === "/" && Number(operands[i + 1]) !== 0:
        total /= Number(operands[i + 1]);
        continue;
      case operators[i] === "*":
        total *= Number(operands[i + 1]);
        continue;
      default:
        total = "Syntax Error";
        break;
    }
  }
  document.querySelector("#screen").textContent = total;
  numbers = "";
}
