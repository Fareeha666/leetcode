/**
 * @param {number[]} nums
 * @return {boolean}
 */

//法一：
//Runtime: 139ms
//使用Set
var containsDuplicate = function(nums) {
    var numsSet = new Set(nums);
    return !(numsSet.size === nums.length);
};

//法二：
//Runtime： 115ms
//不适用Set
var containsDuplicate = function(nums) {
    var save = {},
        length = nums.length;
    if (length < 2) {
        return false;
    } else {
        for (var i = 0; i < length; i++) {
            if (save[nums[i]]) {
                return true;
            } else {
                save[nums[i]] = true;
            }
        }
        return false;
    }
};