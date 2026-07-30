let arr = [1, 0, 0, 1, 1, 0];
let j = 0;
let i = 0;
while (i <= arr.length - 1) {
  if (arr[i] !== 0) {
    i++;
  } else {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j++;
  }
}

console.log(arr);
