/**
 * @param {number} n
 * @return {number}
 */

//Runtime: 96ms
//例：到3必先到1或2，到4必先到3或2……推出，到n必先到n-1或n-2
var climbStairs = function(n) {
    var s = {};
    s[1] = 1;
    s[2] = 2;
    for(var i = 3; i<=n; i++) {
        s[i] = s[i-1] + s[i-2];
    }
    return s[n];
};