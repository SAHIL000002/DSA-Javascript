/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if ((Math.trunc(dividend / divisor)) <= ((2 ** 31) - 1) && (Math.trunc(dividend / divisor) >= -(2 ** 31))) {
        return (Math.trunc(dividend / divisor));
    } else {
        if ((Math.trunc(dividend / divisor)) > ((2 ** 31) - 1))
        return (2 ** 31) - 1;
        if (Math.trunc(dividend / divisor) > -(2 ** 31))
        return -(2 ** 31);
    }
};

