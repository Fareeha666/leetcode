/**
 * @param {string} s
 * @return {number}
 */

//法一：
//Runtime: 126ms
//相当于26进制
var titleToNumber = function(s) {
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        length = s.length,
        carry = 0,
        res = 0;
    for (var i = length - 1; i >= 0; i--) {
        res += (letters.indexOf(s[i]) + 1) * Math.pow(26, carry); 
        carry ++;
    }
    return res;
};

//法二：
//Runtime：
//直接用charCodeAt()返回字符编码
var titleToNumber = function(s) {
    var length = s.length,
        carry = 0,
        res = 0;
    for (var i = length - 1; i >= 0; i--) {
    	var num = s[i].charCodeAt() - 64;
        res += num * Math.pow(26, carry); 
        carry ++;
    }
    return res;
};
