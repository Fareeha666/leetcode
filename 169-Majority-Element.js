/**
 * @param {number[]} nums
 * @return {number}
 */

//Runtime： 112ms
var majorityElement = function(nums) {
    var length = nums.length,
        limit = length / 2,
        times = {};
    for (var i = 0; i < length; i++) {
        if (nums[i] in times) {
            times[nums[i]] ++;
        } else {
            times[nums[i]] = 1;
        }
        if (times[nums[i]] > limit) {
            return nums[i];
        }
    }
};