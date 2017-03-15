/**
 * @param {number[]} nums
 * @return {number}
 */

//法一：
//Runtime: 152ms
//use extra memory
var singleNumber = function(nums) {

	var set = new Set(),
		length = nums.length;

	for(var i = 0; i < length; i++) {
		if (set.has(nums[i])) {
			set.delete(nums[i]);
		} else {
			set.add(nums[i]);
		}
	}

	return [...set][0];

};

//法二：
//Runtime: 112ms
//without using extra memory
var singleNumber = function(nums) {

	var result,
	    length = nums.length;

	nums.sort(function (a, b) {
		return a - b;
	})

	for (var i = 0; i < length; i++) {
		if (nums[i] !== nums[i-1] && nums[i] !== nums[i+1]) {
			result = nums[i];
		}
	}

	return result;

};