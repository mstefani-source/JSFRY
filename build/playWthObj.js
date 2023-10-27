function createObjFromArr(arr) {
	// arr.forEach((el) => {
	// 	result[el] = result[el] ? result[el] + 1 : 1
	// })
	// let result = {}
	// for (let index = 0; index < arr.length; index++) {
	// 	if (result[arr[index]]) {
	// 		result[arr[index]] = arr[index] + 1
	// 	} else {
	// 		result[arr[index]] = arr[index]
	// 	}
	// }
	// return result

	let result = {}

	arr.forEach((el, index) => {
		result[index] = el;
	})


	return result
}

const arr = [1, 3, 5, 6, 8, 9, 20, 1, 1, 2, 2, 8]

const arr2 = [-2, -1, 0, 1, 2]

console.log(arr2.filter((el) => el + 1))