function isNegative(el){
	return el < 0;
}

const int8 = new Int8Array([10, 0, -10, 20, -30, 40, 50])

console.log(int8.filter(isNegative))