/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let best = 0;
    let width = height.length-1;
    let j = height.length-1;
    let i = 0;
    while(i<=j){
        let water = Math.min(height[i],height[j])*width;
        width--;
        if(water >best){
            best = water;
        }
        if(height[i]>=height[j]){
            j--;
        } else {
            i++;
        }
    }
    return best;
};