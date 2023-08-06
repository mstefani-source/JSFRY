/**
 * 
 * @param {Array<number>} arr 
 * @param {number} k 
 * @returns 
 */
function findsum(arr, k) {
	let count = 0
	let subSum = 0
	let hashOfSums = { '0': 1 }

	for (let index = 0; index < arr.length; index++) {
		subSum += arr[index]
		hashOfSums[subSum] = hashOfSums[subSum] + 1 || 1
		let diff = subSum - k;
		count += hashOfSums[diff] || 0
	}
	return count
}
//     0  1  2  3  4   5  6   7
// arr = [4, 2, 2, 1, 2, -3, 5, -8]

//arr = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

console.log(findsum(arr, 5))
