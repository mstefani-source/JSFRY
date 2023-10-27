import { intlen } from './intlen.js';

//console.log("length: ", intlen(238768756));

var isPalindrome = function (num) {
    if (num < 0)
        return false;
    let len = intlen(num) - 1;
    let poly = 0
    let buf = num

    while (buf) {
        poly = poly + buf % 10 * 10 ** len;
        buf = Math.floor(buf / 10)
        len = len - 1
    }

    if (poly !== num)
        return false
    return true
};


console.log("poly 238768756: ", isPalindrome(238768756));
console.log("poly 111101111: ", isPalindrome(111101111));
console.log("poly 111: ", isPalindrome(111));


