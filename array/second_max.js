// find the second largest element in array.

let arr = [10, 30, 40 ,40, 40];

let max = Math.max(arr[0], arr[1]);
let second_max = Math.min(arr[0], arr[1]);

for (let i = 0; i < arr.length; i++) {
  if (max === arr[i]) continue;
   if (max < arr[i]) {
    second_max = max;
    max = arr[i];
  } else if (arr[i] > second_max) second_max = arr[i];
}

console.log(second_max);
