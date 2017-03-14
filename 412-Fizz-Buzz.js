/**
 * @param {number} n
 * @return {string[]}
 */
// 法一： 
// Runtime: 139ms
// 使用遍历与%
var fizzBuzz = function(n) {

    var res = [];

    for(var i = 1; i <= n; i++) {

        if(i % 3 === 0 && i % 5 === 0) {
            res.push('FizzBuzz');
        } else if (i % 3 === 0) {
            res.push('Fizz');
        } else if (i % 5 === 0) {
            res.push('Buzz');
        } else {
            res.push(String(i));
        }

    }

    return res;

};

//法二：
//Runtime: 135ms
//不使用%
var fizzBuzz = function(n) {

    var res = [],
        fizz = 0,
        buzz = 0;

    for (var i = 1; i <= n; i++) {

        fizz++;
        buzz++;

        if (fizz === 3 && buzz === 5) {
            res.push('FizzBuzz');
            fizz = 0;
            buzz = 0;
        } else if (fizz === 3) {
            res.push('Fizz');
            fizz = 0;
        } else if (buzz === 5) {
            res.push('Buzz');
            buzz = 0;
        } else {
            res.push(String(i));
        }

    }
    
    return res;

};