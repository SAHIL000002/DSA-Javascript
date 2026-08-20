// rotate 1 by left

let arr = [2, 3, 4, 5];
let firstElement = arr[0];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = firstElement;
console.log(arr);

