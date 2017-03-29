/**
 * @param {number} n
 * @return {boolean}
 */

//Runtime: 145ms
var isHappy = function(n) {
    var set = new Set(),
        cur = n,
        sum = 0;
    while (sum !== 1) { 
        sum = 0;
        while (cur) {
            sum += Math.pow(cur % 10, 2);
            cur = parseInt(cur / 10);
        }
        if (set.has(sum)) {
            return false;
        } else {
            set.add(sum);
            cur = sum;
        }
    }
    return true;
};