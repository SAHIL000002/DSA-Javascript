// LeetCode Problem no . 3754

//You are given an integer n.

// Form a new integer x by concatenating all the non-zero digits of n in their original order. If there are no non-zero digits, x = 0.

// Let sum be the sum of digits in x.

// Return an integer representing the value of x * sum.


var sumAndMultiply = function (n) {
    var x = 0;
    var sum = 0;
    var c = 0;
    while (n > 0) {

        let rem = n % 10;
        if (rem !== 0) {
            x = x + rem * (10 ** c);
            sum = sum + rem;
            c++;
        }
        n = Math.floor(n / 10);
    }
    return x * sum;
};