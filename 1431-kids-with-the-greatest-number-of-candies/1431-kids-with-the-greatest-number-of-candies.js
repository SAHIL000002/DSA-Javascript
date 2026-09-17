/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let maxcandie = Math.max(...candies);
    let result = new Array(candies.length);
    for (let i = 0; i < candies.length; i++) {
        if ((candies[i] + extraCandies) >= maxcandie) {
            result[i] = true;
        } else {
            result[i] = false;
        }
    }
    return result;
};