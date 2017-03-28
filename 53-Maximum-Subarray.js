/**
 * @param {number[]} nums
 * @return {number}
 */

//Runtime: 152ms
var maxSubArray = function(nums) {
	if (nums.length === 0) {
		return 0;
	}
    var maxSum = nums[0],
    	curSum = nums[0];
    for (var i = 1; i < nums.length; i++) {
    	curSum = curSum < 0 ? nums[i] : curSum + nums[i];
    	maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
};