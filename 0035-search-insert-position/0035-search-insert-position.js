/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    let j = nums.length-1;
    while(i<=j){
        mid = Math.floor((i+j)/2);
        if(target === nums[mid]){
            return mid;
        } else if (target > nums[mid]){
            i=mid+1;
        } else {
            j = mid-1;
        }
    }
    return i;
};