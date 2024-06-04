let x;
// 1-Write a function to find the largest element in an array.
function largest(arr) {
  let ans = arr[0];
  for (const i in arr) {
    if (arr[i] > ans) {
      ans = arr[i];
    }
  }
  return ans;
}
x = largest([1, 2, 3, 4, 5, 67, 8, 9, 10]);
console.log(x);

// 2-Write a function to find the smallest element in an array.

function smallest(arr) {
  let ans = arr[0];
  for (const i in arr) {
    if (arr[i] < ans) {
      ans = arr[i];
    }
  }
  return ans;
}
x = smallest([1, 2, 3, 4, 5, 67, 8, -4, 9, 10, -3]);
console.log(x);

// 3-Write a function to find the sum of all elements in an array.

function sum(arr) {
  let sum = 0;
  for (const i in arr) {
    sum += arr[i];
  }
  return sum;
}
x = sum([1, 2, 3, 4, 5, 67, 8, -4, 9, 10, -3]);
console.log(x);

// 4-Write a function to find the average of all elements in an array.

function average(arr) {
  let sum = 0;
  for (const i in arr) {
    sum += arr[i];
  }
  return sum / arr.length;
}
x = average([1, 2, 3, 4, 5, 67, 8, -4, 9, 18, -3]);
console.log(x);

// 5-Write a function to find the median of all elements in an array.

function median(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  if (arr.length % 2 == 0) {
    return (arr[arr.length / 2] + arr[arr.length / 2 + 1]) / 2;
  }
  return arr[Math.floor(arr.length / 2)];
}

x = median([1, 2, 3, 4, 5, 67, 8, -4, 9, 18, -3]);
console.log(x);

// 6-Write a function to remove all duplicates from an array.

function dups(arr) {
  console.log(arr);
  let dict = {};
  originalLength = arr.length;
  for (let i = 0; i < originalLength; i += 1) {
    if (arr[i] in dict === true) {
      arr.splice(i, 1);
      originalLength -= 1;
      i -= 1;
    } else {
      dict[arr[i]] = "exists";
    }
  }
  return arr;
}
x = dups([1, 1, 1, 1, 1, 1, 3, 1, 2, 2, 2, 1, 1, 1]);
console.log(x);

// 7-Write a function to sort an array in ascending order.

function sort(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  return arr;
}

x = sort([1, 2, 3, 4, 5, 67, 8, -4, 9, 18, -3]);
console.log(x);

// 8-Write a function to sort an array in descending order.

function reverseSort(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });

  return arr;
}

x = reverseSort([1, 2, 3, 4, 5, 67, 8, -4, 9, 18, -3]);
console.log(x);

// 9-Write a function to shuffle the elements of an array randomly.

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

x = shuffle([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(x);
