// console.log("Here is : ", "array");

// /*
// 1
// Correct the syntax error
// [ 1,7 , 9  45 ]

// ["Str" "alex","moh"]

// ['the','fox', 'over', lazy, 'dog']

// */

// /*
// 2
// What the index of "Banana","Tomato"
// var fruits=["Tomato","Banana","Watermelon"]
// banana 1
// tomato 0

// */

// /*
// 3
// Create an array represents your:
// 1- Favorite Food (5)
// 2- Favorite Sport (3)
// 3- Favorite Movie (4)
// */

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push("Mansaf");
}
for (let i = 0; i < 3; i++) {
  arr.push("Football");
}

for (let i = 0; i < 4; i++) {
  arr.push("My dinner with Andre");
}

console.log(arr);
// /*
// 4
// Create a function called firstOfArray
// that take an array as a parameter
// and return the first element in an array

// Ex: firstOfArray([1,4,5]) => 1
// Ex: firstOfArray(["t","u","g","x"]) => "t"
// */
// function firstOfArray(arr) {
//   return arr[0];
// }

// console.log(firstOfArray([1, 2]));
// /*
// 5
// Create a function called lastOfArray
// that take an array as a parameter
// and return the first element in an array

// Ex: lastOfArray([1,4,5]) => 5
// Ex: lastOfArray(["t","u","g","x"]) => "x"
// */
function lastOfArray(arr) {
  return arr[arr.length - 1];
}
console.log(lastOfArray([1, 2]));
// /*
// 6
// Using console make this array to be like this one (push, unshift, shift, pop)

// var array = [0,5,7,9]
// => [1,3,4,6,8,9,10]
// */
// var array = [0, 5, 7, 9];
// for (i = 0; i < 4; i += 1) {
//   array.pop();
// }
// for (i = 1; i <= 10; i += 1) {
//   if (i === 2 || i === 5 || i === 7) {
//     continue;
//   }
//   array.push(i);
// }
// console.log(array);

// /*
// 7
// Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

// var array2 = [5,9,-7,3.5]
// */

// /*
// 8
// Create a function called middleOfArray
// that take an array as a parameter
// and return the middle element in an array if it is have an odd elemnets
// and return the two middle elemnt in an array if it is have an even elemnets

// Ex: middleOfArray([1,4,5]) => 4
// Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
// */

// function middleOfArray(arr8) {
//   if (arr8.length % 2 === 1) {
//     return arr8[Math.floor(arr8.length / 2)];
//   }
//   return `${arr8[arr8.length / 2 - 1]} and ${arr8[arr8.length / 2]}`;
// }

// console.log(middleOfArray([1, 2, 3, 4, 5]));
// console.log(middleOfArray([1, 2, 3, 4, 5, 6]));

// /*
// 9
// Using assignment operator (=)
// make the animals array have these animals
// var animals = ['cat', 'ele', 'bird']
// animals; => ['zebra', 'elephant']
// ** hint: animals[0]=something

// var nums= [1,2,3,8,9]
// nums => [5,-22,3.5,44,98,44]
// */

// /*
// 10
// Create a function called indexOfArray
// that accept an array and index
// and return what this array have in this index

// var nums= [1,2,3,8,9]
// Ex: indexOfArray(nums,3) => 8
// Ex: indexOfArray(nums,1) => 2
// Ex: indexOfArray(nums,4) => 9

// **try more cases by your self
// */

// function indexOfArray(arr10, i) {
//   return arr10[i];
// }
// console.log(indexOfArray([1, 2, 3, 4, 5, 6], 3));

// /*
// 11
// Create a function called arrayExceptLast
// that accept an array
// and return the entire array except the last elemnt
// ** hint: search abou the function that will cut the array on MDN
// var nums= [1,2,3,8,9]
// Ex: arrayExceptLast(nums) =>  [1,2,3,8]

// **try more cases by your self
// */
// function arrayExceptLast(arr11) {
//   return arr11.slice(0, arr11.length - 1);
// }

// console.log(arrayExceptLast([1, 2, 3, 4, 5]));
// /*
// 12
// Create a function called addToEnd
// that accept an array and value
// and return the entire array with add this value to the end of this array

// var nums= [1,2,3,8,9]
// Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

// **try more cases by your self
// */

// function addToEnd(arr12, num) {
//   arr12.pop();
//   arr12.push(num);
//   return arr12;
// }

// console.log(addToEnd([1, 2, 3, 4, 5, 5], 6));

// // all the exercises below should solved 2 times: 1- for loop 2- while lopp
// /*
// 13
// Create a function called sumArray
// that accept an array
// and return the summation of all elemnt in this array

// var nums= [1,2,3,8,9]
// Ex: sumArray(nums) => 23

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// function sumArrayWhile(arr13) {
//   let sum = 0;
//   i = 0;
//   while (i < arr13.length) {
//     sum += arr13[i];
//     i += 1;
//   }
//   return sum;
// }

// console.log(sumArrayWhile([1, 2, 3, 4, 5]));

// function sumArrayFor(arr13) {
//   sum = 0;
//   for (i = 0; i < arr13.length; i += 1) {
//     sum += arr13[i];
//   }
//   return sum;
// }

// console.log(sumArrayFor([1, 2, 3, 4, 5]));

// /*
// 14
// Create a function called minInArray
// that accept an array
// and return the minimum value inside this array

// var nums= [1,2,3,8,9]
// Ex: minInArray(nums) => 1

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */
// function minInArrayFor(arr14) {
//   let min = arr14[0];
//   for (i in arr14) {
//     if (arr14[i] < min) {
//       min = arr14[i];
//     }
//   }
//   return min;
// }

// console.log(minInArrayFor([2, 3, 4, 5, -1, 3]));

// function minInArrayWhile(arr14) {
//   let min = arr14[0];
//   i = 0;
//   while (i < arr14.length) {
//     if (arr14[i] < min) {
//       min = arr14[i];
//     }
//     i += 1;
//   }
//   return min;
// }

// console.log(minInArrayWhile([2, 3, 4, 5, -1, 3]));

// /*
// 15
// Create a function called removeFromArray
// that accept an array and elemnt to remove
// and return the array after remove this elemnt from it

// var nums= [1,2,3,8,9]
// Ex: minInArray(nums,8) => [1,2,3,9]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// function removeFromArrayFor(arr15, num) {
//   let originalLength = arr15.length;
//   for (i = 0; i <= originalLength; i += 1) {
//     if (arr15[i] == num) {
//       arr15.splice(i, 1);
//       i -= 1;
//       originalLength -= 1;
//     }
//   }
//   return arr15;
// }

// console.log(removeFromArrayFor([2, 3, 4, 5, -1, 3], -1));

// function removeFromArrayWhile(arr, num) {
//   let j = 0;
//   let originalLength1 = arr.length;
//   while (j <= originalLength1) {
//     console.log("here");
//     if (arr[j] === num) {
//       console.log("deleted" + arr[j] + "ffff" + j);
//       console.log("here");
//       arr.splice(j, 1);
//       originalLength1 -= 1;
//       console.log("deleted" + arr[j] + "ffff" + j);
//       continue;
//     }
//     j += 1;
//   }
//   return arr;
// }

// console.log(removeFromArrayWhile([2, 3, 4, 5, -1, 3], -1));

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function oddArrayFor(arr16) {
//   let originalLength = arr16.length;
//   for (i = 0; i <= originalLength; i += 1) {
//     if (arr16[i] % 2 == 0) {
//       arr16.splice(i, 1);
//       i -= 1;
//       originalLength -= 1;
//     }
//   }
//   return arr16;
// }

// function removeFromArrayWhile(arr16) {
//   i = 0;
//   let originalLength = arr16.length;
//   while (i <= originalLength) {
//     if (arr16[i] % 2 == 0) {
//       arr16.splice(i, 1);
//       originalLength -= 1;
//       continue;
//     }
//     i += 1;
//   }
//   return arr16;
// }

// /*
// 17
// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array

// var nums= [1,2,3,8,9]
// Ex: aveArray(nums) => 4.6

// var nums2= [1,2,3,8,9,77]
// Ex: aveArray(nums) => 16.6

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// function avgArrayWhile(arr17) {
//   let sum = 0;
//   while (i < arr17.length) {
//     sum += arr17[i];
//     i += 1;
//   }
//   return sum / arr17.length;
// }

// function avgArrayFor(arr17) {
//   sum = 0;
//   for (i = 0; i < arr17.length; i += 1) {
//     sum += arr17[i];
//   }
//   return sum / arr17.length;
// }

// /*
// 18
// Create a function called shorterInArray
// that accept an array of strings
// and return the shortest string inside this array (first)

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: shorterInArray(strings) => "alex"

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// function shorterInArrayFor(arr) {
//   min = 0;
//   minLength = arr[0].length;
//   for (i in arr) {
//     if (arr[i].length < minLength) {
//       min = i;
//       minLength = arr[i].length;
//     }
//   }
//   return arr[min];
// }

// function shorterInArrayWhile(arr) {
//   min = 0;
//   minLength = arr[0].length;
//   i = 0;
//   while (i < arr.length) {
//     if (arr[i].length < minLength) {
//       min = i;
//       minLength = arr[i].length;
//     }
//   }
//   return arr[min];
// }
// /*
// 19
// Create a function called repeatChar
// that accept a string and char
// and return the times that this char repeat inside this string

// var string= "alex mercer madrasa rashed2 emad hala"
// Ex: repeatChar(string,"a") => 6
// Ex: repeatChar(string,"z") => 0

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// function repeatCharFor(str, cha) {
//   let rep = 0;
//   for (i in str) {
//     if (str[i] == cha) {
//       rep += 1;
//     }
//   }
//   return rep;
// }

// function repeatCharWhile(str, cha) {
//   let rep = 0;
//   i = 0;
//   while (i < str.length) {
//     if (str[i] == cha) {
//       rep += 1;
//     }
//   }
//   return rep;
// }

// /*
// 20
// Create a function called evenIndexOddLength
// that accept an array of strings
// and return a new array that have the string with odd length in even index

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: evenIndexOddLength(strings) => ["madrasa"]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// function evenIndexOddLengthFor(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i += 2) {
//     if (arr[i].length % 2 == 1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// function evenIndexOddLengthWhile(arr) {
//   let newArr = [];
//   i = 0;
//   while (i < arr.length) {
//     if (arr[i].length % 2 == 1) {
//       newArr.push(arr[i]);
//     }
//     i += 1;
//   }
//   return newArr;
// }

// /*
// 21
// Create a function called powerElementIndex
// that accept an array of number
// and return a new array that have the elemnt power by the index of it self

// var nums= [44, 5, 4, 3, 2, 10]
// Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// function powerElementIndexFor(arr) {
//   let newArr = [];
//   for (i in arr) {
//     newArr.push(Math.pow(arr[i], i));
//   }
//   return newArr;
// }

// function powerElementIndexWhile(arr) {
//   let newArr = [];
//   i = 0;
//   while (i < arr.length) {
//     newArr.push(Math.pow(arr[i], i));
//     i += 1;
//   }
//   return newArr;
// }

// /*
// 22
// Create a function called evenNumberEvenIndex
// that accept an array of nums
// and return a new array that have the even number in even index

// var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// Ex: evenNumberEvenIndex(nums) => [2,8,34]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

// function evenNumberEvenIndexFor(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i += 2) {
//     if (arr[i] % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// function evenNumberEvenIndexWhile(arr) {
//   let newArr = [];
//   i = 0;
//   while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//       newArr.push(arr[i]);
//     }
//     i += 1;
//   }
//   return newArr;
// }
