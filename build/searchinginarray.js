const fruits = ["apple", "banana", "grapes", "mango", "orange"];

const fruitsObj = {
	length:2,
	'apple': 'green',
	'banana' : 'yellow',
	'grapes' : 'green',
	'mango' : 'green',
	'orange' : 'orange',
	1: "green",
	2: "orange"

}

const strInstance = "asl;dkj;saflkj"

function searchSubString(arr, pattern) {

	return Array.prototype.filter.call(fruitsObj, (x) => x == "green")
		//(el) => el.toLowerCase().includes(pattern.toLowerCase()))

		

}

//console.log(searchSubString(fruits, "na"))

console.log(searchSubString(fruitsObj, "green"))