/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let j = numbers.length - 1;
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] + numbers[j] == target) {
            return [i + 1, j + 1];
        } else if (target < (numbers[i] + numbers[j])) {
            j--;

        } else {
            i++;
        }
    }
};