/**
 * @param {number} n
 * @return {number}
 */

//Runtime: 96ms
var climbStairs = function(n) {
    var s = {};
    s[1] = 1;
    s[2] = 2;
    for(var i = 3; i<=n; i++) {
        s[i] = s[i-1] + s[i-2];
    }
    return s[n];
};