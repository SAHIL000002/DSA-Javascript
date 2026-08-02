// reverse th array

let arr = [10, 20, 30, 40, 50];

let j = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  if (i < j) break;
  else {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j=j+1;
  }
}

console.log(arr);
