export var intlen = function(num: number){
	let len:number = 0;
	
	while (num !== 0){
		num = Math.floor(num / 10)
		len++
	}
	return len 
}