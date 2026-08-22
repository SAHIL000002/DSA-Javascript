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

// right rotation by k element

arr2 = [1, 2, 3, 4, 5];
let k2 = 2;
for (let j = 0; j < k2 % arr2.length; j++) {
  let copy = arr2[arr2.length - 1];
  for (let i = arr2.length - 1; i > 0; i--) {
    arr2[i] = arr2[i - 1];
  }
  arr2[0] = copy;
}

console.log(arr2);

// rotate left by k element with T.C. (n) and one extra space

arr3 = [1, 2, 3, 4, 5];
let k3 = 1;
temp = new Array(arr3.length);
for (let i = 0; i < arr3.length; i++) {
  temp[i] = arr3[(i + k3) % arr3.length];
}

console.log(temp);

// rotate right by k element with T.C. (n) and one extra space

arr4 = [1, 2, 3, 4, 5];
let k4 = 2;
temp = new Array(arr4.length);
for (let i = 0; i < arr4.length; i++) {
  temp[(i + k4) % arr4.length] = arr4[i];
}

console.log(temp);
