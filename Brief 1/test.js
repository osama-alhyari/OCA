// setTimeout(function () {
//   console.log("2 seconds");
//   setTimeout(function () {
//     console.log("1 more second");
//   }, 1000);
// }, 2000);

// setTimeout(function () {
//   console.log("2 seconds passed");
// }, 2000);
// setTimeout(function () {
//   console.log("1 second passed");
// }, 1000);
// setTimeout(function () {
//   console.log("3 seconds passed");
// }, 3000);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calculate(a, b, myCallback) {
  return myCallback(a, b);
}

console.log(calculate(9, 7, add));
console.log(calculate(9, 7, subtract));
