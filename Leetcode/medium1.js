//  LeetCode Problem no. 7

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

var reverse = function (x) {
  if (x > -(2 ** 31) && x < 2 ** 31 - 1) {
    let copy = x;
    let reverse = 0;
    while (x !== 0) {
      if (x < 0) {
        x = -x;
      }
      digit = x % 10;
      reverse = reverse * 10 + digit;
      x = Math.floor(x / 10);
    }
    if (reverse > -(2 ** 31) && reverse < 2 ** 31 - 1) {
      if (copy > 0) return reverse;
      else return -reverse;
    } else return 0;
  }
};
