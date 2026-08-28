/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // if (nums1[0] == 0) {
    //     nums1[0] = nums2[0];
    // }
    let c = nums1.length - 1;
    let j = nums2.length - 1;
    let i = (nums1.length - nums2.length) - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] <= nums2[j]) {
            nums1[c] = nums2[j];
            j--;
            c--
        } else {
            nums1[c] = nums1[i]
            i--
            c--
        }
    }
    while (j >= 0) {
        nums1[c] = nums2[j];
        j--
        c--
    }
};