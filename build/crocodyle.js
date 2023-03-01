let isTrueCrock = (str, sub) => {
	return sub.split('').every(element => {
		let index = str.indexOf(element)
		if (str.indexOf(element, index) >= 0) {
			str = str.slice(index + 1)
			return true
		} else {
			return false
		}
	})	
}
