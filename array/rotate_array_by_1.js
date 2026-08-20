// rotate 1 by left

let arr = [2, 3, 4, 5];
let firstElement = arr[0];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = firstElement;
console.log(arr);

// rotate 1 by right

let arr2 = [1, 2, 3, 4, 5];
let lastElement = arr2[arr2.length - 1];
for (let i = arr2.length - 1; i > 0; i--) {
  arr2[i] = arr2[i - 1];
}
arr2[0] = lastElement;

console.log(arr2);
