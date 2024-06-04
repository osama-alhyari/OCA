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
