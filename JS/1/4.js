const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function questions() {
  // 1- Write a program that prints numbers from 1 to 10 using a for loop.
  console.log("Question 1");
  for (let i = 1; i < 11; i += 1) {
    console.log(i);
  }

  // 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
  console.log("Question 2");
  for (let i = 1; i < 11; i += 1) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }

  // 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
  console.log("Question 3");
  let i = 1;
  while (i < 11) {
    if (i % 2 != 0) {
      console.log(i);
    }
    i += 1;
  }

  // 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
  console.log("Question 4");
  input = await rl.question(`Enter a number`);
  for (let i = 1; i < 11; i += 1) {
    console.log(i * Number(input));
  }

  // 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
  console.log("Question 5");
  i = 1;
  let sum = 0;
  while (i < 101) {
    sum += i;
    i += 1;
  }
  console.log(sum);
  // 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
  console.log("Question 6");
  input = await rl.question(`Enter a number`);
  let factorial = 1;
  for (let i = Number(input); i > 0; i -= 1) {
    factorial *= i;
  }
  console.log(factorial);
  // 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
  console.log("Question 7");
  input = await rl.question(`Enter a number`);
  let fib = [0, 1];
  let fibIndex = 1;
  let nextFib = fib[fibIndex] + fib[fibIndex - 1];
  while (nextFib <= Number(input)) {
    fib.push(nextFib);
    fibIndex += 1;
    nextFib += fib[fibIndex - 1];
  }
  console.log(...fib);

  // 8- Write a program that prints the reverse of the following numbers:
  //5 , 10 , 15 , 20
  // using a while loop.
  console.log("Question 8");
  i = 20;
  while (i > 0) {
    console.log(i);
    i -= 5;
  }
  rl.close;
}

questions();
