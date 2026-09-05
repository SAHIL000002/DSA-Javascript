/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let i = 0;
    let j = nums.length - 1;
    let k = nums.length - 1;

    let result = new Array(nums.length);

    while (i <= j) {
        if (nums[i] ** 2 > nums[j] ** 2) {
            result[k] = nums[i] ** 2;
            i++;
        } else {
            result[k] = nums[j] ** 2;
            j--;
        }

        k--;
    }

    return result;
};