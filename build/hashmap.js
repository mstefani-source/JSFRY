/**
 * @param {Array<number>} arr
 * @param {number} 
 * @returns {number} 
 */

function findsum(arr, k) {
	const hashOfSums = { '0': 1 }
	let count = 0;
	let subSum = 0;
	let subArr = []
	let prevCount = 0
	for (let i = 0; i < arr.length; i++) {
		subSum += arr[i];
		
		let to_remove = subSum - k;

		if (to_remove in hashOfSums) {
			count += hashOfSums[to_remove]
		}
	
		if (subSum in hashOfSums) {
			prevCount = hashOfSums[subSum]
		} else {
			prevCount = 0;
		}

		hashOfSums[subSum] = prevCount + 1
		
	}
	console.log(hashOfSums)

	return count
}
//     0  1  2  3  4   5  6   7
// arr = [4, 2, 2, 1, 2, -3, 5, -8]

arr = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

console.log(findsum(arr, 5))
