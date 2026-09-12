let nums = [1,1,2, 4, 4 ,6,7,8];
console.log(removeDuplicates(nums));

function removeDuplicates (nums) {
    let c = 0;
    let i = 0;
    let j = 1;
    if (nums.length > 0) {
        c++;
    }
    while (j < nums.length) {
        if (nums[i] == nums[j]) {
            j++;
        } else {
            i = j;
            j++;
            c++;
        }
    }
    return c;
};