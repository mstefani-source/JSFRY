const sum = (arg)=>{
	let total = 0
	
	function a(param){
		if (!param){
			return total
		}
		total = total + param
		return a
	}
	
	return a(arg)
}



console.log(sum(1)())
console.log(sum(2)(2)())
