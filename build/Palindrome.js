const isPalindrome = (str) => {
	// реализуй функцию isPalindrome
	let cleanStr = str.replace(/[. \r\f\v\n\t]/g,'')
	let length_of_str = cleanStr.length
	let reverseStr = ''
	for (i = length_of_str; i > 0; i--){
	  reverseStr = reverseStr + cleanStr[i - 1]
	}
	return reverseStr.toLowerCase() === cleanStr.toLowerCase()
}