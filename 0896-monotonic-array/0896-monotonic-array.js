/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    let c = 0;
    let p = 0;
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] <= nums[i + 1]) {
            c++;
        }
        if (nums[i] >= nums[i + 1]) {
            p++;
        }
    }
    return (c === nums.length-1 || p === nums.length-1)
};