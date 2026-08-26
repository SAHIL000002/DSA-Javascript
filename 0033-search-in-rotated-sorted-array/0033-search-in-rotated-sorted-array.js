/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        if (nums[i] <= nums[mid]) {
            if (nums[i] <= target && target <= nums[mid]) {
                j = mid - 1;
            } else {
                i = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[j]) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
    }
    return -1;
};