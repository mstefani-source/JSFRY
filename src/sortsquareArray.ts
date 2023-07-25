function sortSquareArray(arr){

	return arr.reduce(function(acc: number[], elem: number){
		acc.push(elem**2)
		return acc.sort((a,b)=>a-b)
	},[])
}


console.log(sortSquareArray([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
console.log(sortSquareArray([-7, -3, 2, 3, 11])); // [4, 9, 9, 49, 121]