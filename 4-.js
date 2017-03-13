var findMedianSortedArrays = function(nums1, nums2) {
    var arr = [...nums1,...num2],
        length = arr.length,
        res;
    arr.sort(function (a, b) {
    	return a - b;
    })
    if (length%2 === 1) {
    	res = arr[Math.ceil(length/2)];
    } else {
    	res = (arr[length/2] + arr[length/2 + 1]);
    }

    return res;
};

console.log(findMedianSortedArrays([1,3],[2]));