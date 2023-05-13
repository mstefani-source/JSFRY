const arr = [
	{ id: 15 },
	{ id: -1 },
	{ id: 0 },
	{ id: 3 },
	{ id: 12.2 },
	{},
	{ id: null },
	{ id: NaN },
	{ id: "undefined" },
];

let invalidEntries = 0;

function isValid(isntance) {
	if (Number.isFinite(isntance.id) && isntance.id != 0){
		return true
	}
	invalidEntries++;
	return false
}

console.log(arr.filter(isValid))