/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let result = new Array(2 * n);
    let j = n;
    let k = 0;
    for (let i = 0; i < 2*n; i = i + 2) {
        result[i] = nums[k];
        result[i + 1] = nums[j];
        k++;
        j++;
    }
    return result;
};