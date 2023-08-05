/**
 * @param {Array<number>} arr
 * @param {number} 
 * @returns {number} 
 */

function findsum(arr, k) {
	const hashOfSums = {}
	let count = 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++){
		sum = sum + arr[i]
		if (!hashOfSums[sum]){
			hashOfSums[sum] = hashOfSums[sum] || 1
		}else{
			hashOfSums[sum]++
			if(hashOfSums[sum]){

			}
		}
	}	

	return hashOfSums
}



arr = [4, 2, 2, 1, 2, -3, 5, -8]

console.log(findsum(arr, 5))