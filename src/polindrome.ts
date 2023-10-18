export var isPalindrome = function(x: number) {
	if (x < 0){
		return false
	}
	let xst = x + ''
	let polindrome: string = ''
    for (let i = xst.length-1; i >= 0; i--){
        polindrome = polindrome + xst[i]
    }
	return polindrome === xst?true:false
};