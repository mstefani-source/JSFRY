/**
 * @param {Array<number>} arr
 * @param {number} 
 * @returns {number} 
 */

function findsum(arr, k) {
	const hashOfSums = {}
	let count = 0;
	let sum = arr.reduce((acc, cur) => {
		if (cur == k) {
			count++
		}
		if (typeof hashOfSums[acc] == 'undefined')
			hashOfSums[acc] = hashOfSums[acc] || 1;
		else {
			hashOfSums[acc]++
		}
		if (hashOfSums.hasOwnProperty(acc - k)) {
			count++;
			if (hashOfSums[acc - k] != 0) {
				hashOfSums[acc - k]--;
			}
		}
		return acc + cur
	})
	if (sum == k) count++	

	return count
}



arr = [4, 2, 2, 1, 2, -3, 5, -8]
console.log(findsum(arr, 5))