/**
 * @param {number[]} prices
 * @return {number}
 */

//Runtime: 125ms
var maxProfit = function(prices) {

    var maxPro = 0,
    	minBuy = prices[0],
    	maxSell = 0;

    for (var i = 1; i < prices.length; i++) {

    	if (minBuy < prices[i]) {
    		maxSell = prices[i];
    		maxPro = maxPro > (maxSell - minBuy) ? maxPro : (maxSell - minBuy); 
    	} else {
    		minBuy = prices[i];
    	}
    	
    }

    return maxPro;

};