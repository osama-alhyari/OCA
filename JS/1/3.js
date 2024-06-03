const readline = require("node:readline/promises");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// console.log(rl.question);
let input, arr , num1 , num2;
async function questions() {
  // 1- Write a program to declare two numbers. If both numbers are greater than 10,
  //print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
  input = await rl.question(`Enter a number`);
  num1 = Number(arr[0]);
  num2 = Number(arr[1]);
  if (num1 > 10 && num2 > 10) {
    console.log("both greater");
  } else if (num1 > 10 || num2 > 10) {
    console.log("atleast one is greater");
  } else {
    console.log("none is greater");
  }
  // 2- Write a program to declare a username and a password.
  //If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".

  input = await rl.question(
    `Enter username and password (seperate them by a space)`
  );
  arr = input.split(" ");
  let username = arr[0];
  let password = arr[1];
  if (username === "osama" && password === "123password") {
    console.log("access granted");
  } else {
    console.log("access denied");
  }
  // 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
  // Otherwise, print "The number is not between 10 and 20".
  input = await rl.question(`Enter a number (seperate them by a space)`
    num = Number(input);
    if (num1 > 9 && num1 < 21) {
      console.log("between 10 and 20");
    } else {
      console.log("not inbetween");
    }
  rl.close();


console.log("-------------------------------------------------------");
question1();
console.log("--------------111111111111111111111-----------------------------");
question2();
console.log("---------------222222222222222222222----------------------------");
