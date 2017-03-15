/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//法一：
//Runtime: 109ms
var moveZeroes = function(nums) {

	var length = nums.length;

    for(var i = 0; i < length; i++) {

    	if (nums[i] === 0) {
    		nums.splice(i, 1);
    		nums.push(0);
    		i--;
    		length--;
    	}

    }

};

//法二：
//Runtime: 102ms
var moveZeroes = function(nums) {
	
	var pos1, //用来找0
		pos2, //用来找非0
		i, 
		len = nums.length;

	//找到第一个0的位置
	for (i = 0; i < len; ++i) {
		if (nums[i] === 0) {
		  pos1 = pos2 = i;
		  break;
		}
	}

	if (pos1 !== undefined) {

		while (true) {

			while (nums[pos2] === 0) { 
				pos2++;
			}

			if (pos2 === len) {
				break;
			}

			//将非零数前移，0后移（交换位置）
			nums[pos1] = nums[pos2];
			nums[pos2] = 0;

			while (nums[pos1] !== 0) { 
				pos1++;
			}

		}

	}

};