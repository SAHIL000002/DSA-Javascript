// left rotation by k element

arr = [1, 2, 3, 4, 5];
let k = 10;
for (let j = 0; j < k % arr.length; j++) {
  let copy = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = copy;
}

console.log(arr);

