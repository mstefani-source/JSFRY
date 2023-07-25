function a(...arg) {
	return arg.reduce((acc, el)=>acc + el);
}

function limitFunc(fn, limit) {
	let count = 0;
	return function b(...arg) {
		// console.log(this === global)
		if (count < limit) {
			count++;
			return fn.call(b, ...arg);
		}
	}
}

const att = limitFunc(a, 1)

console.log(att(2, 2, 3));
console.log(att(2, 2));