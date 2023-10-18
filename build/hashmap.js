/**
 * @param {Array<number>} arr
 * @param {number} k
 * @return {number} count
 */
function findSums(arr, k) {
	let count = 0
	let hashOfSums = { '0': 1 }
	let subSum = 0
	for (let i = 0; i < arr.length; i++) {
		subSum += arr[i];
		hashOfSums[subSum] = hashOfSums[subSum] + 1 || 1
		let diff = subSum - k
		count += hashOfSums[diff] || 0
	}
	return count
}

ar = [4, 2, 2, 1, 2, -3, 5, -8]

console.log(findSums(ar, 0))