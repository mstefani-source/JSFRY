var debug = 0;

/**
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * [3,2,4,7,8,9,10] 6
 * 0100 1101 0010
 * 0100 1100 1110
 **/

//import { isPalindrome } from './polindrome.js'
import { twoSum } from './twosum.js';
import { intlen } from './intlen.js'
 

//console.log(isPalindrome(121))

//console.log(twoSum([3,2,4,7,8,9,10], 6))

console.log(intlen(238768756))

var isPalindrome = function(num){
	if(num < 0 ) return false;
	let len = intlen(num)
	let poli = 0
	for(let i=0; i<len; i++){

		poli = poli + 1
	}
	return true
}
var st = {'big str': String}
var g = st instanceof String
console.log(g)
