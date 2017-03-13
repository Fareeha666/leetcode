/**
 * @param {string} s
 * @return {number}
 */

//法一：
//Runtime： 242ms
//使用字典结构，遍历每个字符，将其索引存入字典
//若有符合条件的重复字符出现时，更新子字符串的开始位置
var lengthOfLongestSubstring = function(s) {
    
    var dictionary = {},
        maxLength = 0,
        curLength = 0,
        starIndex = 0,
        sLength = s.length;

    for (var i = 0; i < sLength; i++) {
        
        var char = s[i];

        //当前字符重复，且重复字符上次出现的位置在开始位置之后，才更新开始位置
        if (dictionary[char] !== undefined && starIndex <= dictionary[char]) {
            starIndex = dictionary[char] + 1;
        }

        dictionary[char] = i;
        curLength = i -starIndex + 1;
        maxLength = (curLength > maxLength) ? curLength : maxLength; 

    }

    return maxLength;
    
};

//法二：
//Runtime： 182ms
//使用数组存子串字符，比较索引，若已存在，则截去存在及之前部分
var lengthOfLongestSubstring = function(s) {

  var maxLength = 0,
      subArr = [], 
      index;

  for (var i = 0; i < s.length; i++) {

    index = subArr.indexOf(s[i]);//查找当前字符在数组中的位置

    if (index !== -1) {//如果当前字符已存在于数组，则从此位置之后，将其截断，取之后的部分
    subArr = subArr.slice(index + 1, subArr.length);
    }

    subArr.push(s[i]);//将当前字母放入数组
    maxLength = subArr.length > maxLength ? subArr.length : maxLength;

  }

  return maxLength;

};