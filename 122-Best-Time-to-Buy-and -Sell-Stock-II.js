/**
 * @param {number[]} prices
 * @return {number}
 */

//Runtime: 112ms
//思路：累计所有上升波段的值
var maxProfit = function(prices) {

    var length = prices.length,
    	maxPro = 0;

    if (length < 2) {
    	return 0;
    }

    for (var i = 1; i < length; i++) {
    	if (prices[i] - prices[i - 1] > 0) {
    		maxPro += prices[i] - prices[i - 1];
    	}
    }

    return maxPro;

};