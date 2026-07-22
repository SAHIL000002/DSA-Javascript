/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let c = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " " && c === 0) {
            continue;
        } else if (s[i] !== " ") {
            c++;
        }
        else if (c !== 0 && s[i] === " ") {
            return c;
        }
    }
    return c;
}