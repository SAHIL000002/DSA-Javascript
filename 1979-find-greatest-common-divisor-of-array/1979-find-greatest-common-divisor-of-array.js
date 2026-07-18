/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let sr = nums.sort((a,b) => a - b);
    for (let i = sr[0]; i > 0; i--) {
        if (sr[0] % i === 0 && sr[sr.length - 1] % i === 0)
            return i;
    }
};