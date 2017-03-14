/**
 * @param {number} x
 * @return {number}
 */

//Runtime: 146ms
//超简单的题，反序数字就行
//但是在leetcode里，数字超过2的31次方，就返回0了
var reverse = function(x) {

    var isPositive x >= 0 ? true : false,
    	newNum = Math.abs(x).split('').reverse().join('');

    if(newNum > Math.pow(2,31)) { return 0 };//加这句都是leetcode的原因

    return isPositive ? newNum : 0 - newNum;

};

