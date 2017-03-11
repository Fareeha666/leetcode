//法一： 双重for循环 
//Runtime：199ms
var twoSum = function(nums, target) {

    var numsLen = nums.length;

    for (var i = 0; i< numsLen; i++) {
    	for (var j = i + 1; j < numsLen; j++) {
    		if (nums[i] + nums[j] === target) {
    			return [i, j];
    		}
    	}
    }	

};

//法二： 单for循环，求差值，存数组
//将差值作为临时数组的index，将该值的index作为对应值
//Runtime: 105ms
var twoSum = function(nums, target) {

    var temp = [];
    var numsLen = nums.length;

    for (var i = 0; i < numsLen; i++) {
        if (temp[target - nums[i]] !== undefined) {
            return [temp[target - nums[i]], i];
        }

        if (!temp[nums[i]]) {
            temp[nums[i]] = i;
        }
    }

};

// test
console.log(twoSum([1, 3, 5, 7], 10));
