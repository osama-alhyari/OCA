/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(numOfChildren, partner, location, job) {
  console.log(
    `You will be a ${job} in ${location}, and married to ${partner} with ${numOfChildren} kids.`
  );
}

tellFortune(5, "Bent el 7alal", "Jordan", "CTO");
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age) {
  console.log(`Your doggie is ${age * 7} years old in dog years!`);
}
calculateDogAge(1);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amountPerDay) {
  console.log(
    `You will need ${
      (100 - age) * 365 * amountPerDay
    } cups of tea to last you until the ripe old age of 100`
  );
}
calculateSupply(30, 3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name) {
  return `hello ${name}`;
}
greeting = greet("osama");
console.log(greeting);
/*
5
what is the error:
function double(cat) {
  return 2 * x;
} the parameter cat isnt used

function double(7) {
  return 2 * 7;
} the parameter isnt a valid variable name

function double('7') {
  return 2 * 'x';
}
Returning a string multiplied by a number + the parameter isnt a valid variable name
*/

/*
6
fix these functions:
function double1 (x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3 (x){
  return 2 * x;

*/

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(num) {
  console.log(num * num * num);
}
cube(3);
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(num1, num2) {
  console.log(num1 * num2);
}
multiply(2, 6);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age) {
  if (age >= 20) {
    console.log("yes you can");
  } else {
    console.log(`please come back after ${20 - age} years to get one`);
  }
}
canIGetADrivingLicense(32);
canIGetADrivingLicense(12);

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1, str2) {
  return str1.length === str2.length;
}
let x = sameLength("hello", "heloooooooo");
console.log(x);

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

x = largerNubmer(5, 3);
console.log(x);
x = largerNubmer(3, 5);
console.log(x);

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNumber(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return num1;
  } else if (num2 < num3) {
    return num2;
  } else {
    return num3;
  }
}
x = smallerNumber(1, 2, 3);
console.log(x);
x = smallerNumber(2, 1, 3);
console.log(x);
x = smallerNumber(3, 2, 1);
console.log(x);
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(str1, str2, str3, str4, str5) {
  let min = str1.length;
  let shortest = str1;
  if (str2.length < min) {
    min = str2;
    shortest = str2;
  }
  if (str3.length < min) {
    min = str3;
    shortest = str3;
  }
  if (str4.length < min) {
    min = str4;
    shortest = str4;
  }
  if (str5.length < min) {
    min = str5;
    shortest = str5;
  }
  return shortest;
}

x = shorterString("A", "AA", "aaa", "aaaa", "aaaaa");
console.log(x);
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerStringString(str1, str2, str3, str4) {
  let max = str1.length;
  let longest = str1;
  if (str2.length > max) {
    max = str2.length;
    longest = str2;
  }
  if (str3.length > max) {
    max = str3.length;
    longest = str3;
  }
  if (str4.length > max) {
    max = str4.length;
    longest = str4;
  }
  return longest;
}
x = longerStringString("A", "aaa", "aa", "aaaa");
console.log(x);
x = longerStringString("aaaa", "aaa", "aa", "A");
console.log(x);
x = longerStringString("aaa", "aa", "aaaa", "A");
console.log(x);
x = longerStringString("aaa", "aaaa", "aa", "A");
console.log(x);

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(num) {
  return num % 2 === 0;
}
x = isEven(7);
console.log(x);
x = isEven(8);
console.log(x);
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num) {
  return num % 2 === 1;
}
x = isOdd(7);
console.log(x);
x = isOdd(8);
console.log(x);
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num) {
  return Math.abs(num);
}
x = positive(-5);
console.log(x);
x = positive(5);
console.log(x);
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(fname, lname) {
  return `${fname} ${lname}`;
}
x = fullName("osama", "hyari");
console.log(x);
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(num1, num2, num3, num4, num5) {
  let sum = num1 + num2 + num3 + num4 + num5;
  return sum / 5;
}
x = average(1, 2, 3, 4, 5);
console.log(x);
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
  return Math.random();
}
x = randomNumber();
console.log(x);
x = randomNumber();
console.log(x);
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/ function randomBetweenNumbers(num1, num2) {
  if (num1 > num2) {
    return Math.floor(Math.random() * (num1 - num2)) + num2;
  }
  return Math.floor(Math.random() * (num2 - num1)) + num1;
}
x = randomBetweenNumbers(5, 25);
console.log(x);
x = randomBetweenNumbers(25, 95);

console.log(x);
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(num) {
  switch (true) {
    case num >= 0 && num < 50:
      return "F";
    case num >= 50 && num < 70:
      return "D";
    case num >= 70 && num < 84:
      return "C";
    case num >= 84 && num < 94:
      return "B";
    case num >= 94 && num <= 100:
      return "A";
  }
}
x = scoreInUniversty(65);
console.log(x);
x = scoreInUniversty(85);
console.log(x);
x = scoreInUniversty(95);
console.log(x);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let count = { count: 0 };
function counter() {
  count.count += 1;
  console.log(count.count);
}
counter();
counter();
counter();
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter() {
  console.log(`${count.count} and the counter reset now`);
  count.count = 0;
}
resetCounter();
counter();
counter();
