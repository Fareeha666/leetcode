/**
 * @param {number} num
 * @return {number}
 */

//Runtime: 105ms
 var findComplement = function(num) {
     var num10 = num,
         arr2 = num10.toString(2).split(''),
         numCom;
     arr2.forEach(function (val, ind) {
        if (val === '1') {
            arr2[ind] = '0';
        } else {
         arr2[ind] = '1';
        }
     });
     numCom = parseInt(arr2.join(''), 2);
     return numCom;
 };