let bubble = (arr) => {
	return arr.sort((a,b) => {
		return a-b
	})
}


console.log(bubble([5, 2, 1, 3, 9, 0, 4, 6, 8, 8, 7]))