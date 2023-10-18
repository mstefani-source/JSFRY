export function sum_of_numarray(data: Array<number>):number {
	let sum:number = 0;
	data.forEach(elem => {
		sum = sum + elem 
	});
	return sum;
}

export function all_have_a_double(data: Array<number>):boolean{
	let res = 0;
	data.forEach(elem => {
		res = res^elem;
	});
	return res?false:true;
}