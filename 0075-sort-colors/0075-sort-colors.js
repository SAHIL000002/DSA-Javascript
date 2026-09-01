/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let j = 0;
    let k = nums.length - 1;
    let temp;
    let i = 0;
    while (i <= k) {
        if (nums[i] == 0) {
            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++
            j++;
        } else if (nums[i] == 2) {
            temp = nums[i];
            nums[i] = nums[k];
            nums[k] = temp;
            k--;
        } else {
            i++
        }
    }
}
