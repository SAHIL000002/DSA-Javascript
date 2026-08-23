/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let c = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            c++;
        }
        if(nums[i+1] === undefined){
            if(nums[nums.length-1]>nums[0]){
                c++;
            }
        }
    }
    if (c < 2) {
        return true;
    } else {
        return false;
    }
};