// leetCode Problem no. 9

// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
    let n = 0;
    let original = x;
    if (x < 0) return false;
    else {
        while (x > 0) {
            n = n * 10 + (x % 10);
            x = Math.floor(x / 10);
        }
    }
    return n === original;
};