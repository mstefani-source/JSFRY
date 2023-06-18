const { log, count } = require("console")

/**
 * 
 * @param {number[]} nums 
 * @return {number}
 */


function FindMin(nums) {
	let leftInd = 0;
	let rightInd = nums.length - 1;
	let midInd;
	let counter = 0;
//	if (nums[leftInd] < nums[rightInd]) return nums[leftInd]

	// while (leftInd < rightInd) {
	// 	midInd = Math.floor((leftInd + rightInd) / 2);
	// 	// console.log("nums: ", nums.slice(leftInd, rightInd + 1))
	// 	// console.log("left:",leftInd," right: ",rightInd,"midInd: ", midInd)
	// 	if (leftInd == midInd){
	// 		return(nums[leftInd + 1])
	// 	}
		
	// 	if (nums[leftInd] > nums[midInd]) {
	// 		// console.log(`${nums[leftInd]} > ${nums[midInd]}`)
	// 		rightInd = midInd
	// 		// console.log("move right to mid")
	// 	} else {
	// 		// console.log(`${nums[leftInd]} <= ${nums[midInd]}`)
	// 		leftInd = midInd
	// 		// console.log("move left to mid")
	// 	}
	// }

	// return nums[leftInd]
	while (leftInd < rightInd && counter < 4) {
		midInd = Math.floor((leftInd + rightInd) / 2);
		console.log("nums: ", nums.slice(leftInd, rightInd + 1))
		if (nums[midInd] > nums[rightInd]) {
			leftInd = midInd 
		} else {
			rightInd = midInd
		}
		counter++
	}

	return nums[leftInd]

};



console.log(FindMin([7, 8, 9, 0, 1, 2, 3]));
// console.log(FindMin([3, 4, 5, 6, 7, 1, 2]));
// console.log(FindMin([4, 5, 6, 7, 0, 1, 2]));
// console.log(FindMin([11, 12, 13, 15, 17]));
// console.log(FindMin([7, 0]));