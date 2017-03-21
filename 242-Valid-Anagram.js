/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//Runtime: 139ms
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    } else {
       var newS = s.split('').sort().join(''),
       	   newT = t.split('').sort().jion('');
       return newS === newT;
};


//Runtime: 129ms
//不拼成字符串更快一点？？？
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    } else {
        var sArr = s.split(''),
            tArr = t.split('');
            sArr.sort();
            tArr.sort();
        for (var i = 0; i < s.length; i++) {
            if (sArr[i] !== tArr[i]) {
                return false;
            } 
        }
        return true;
    }
};