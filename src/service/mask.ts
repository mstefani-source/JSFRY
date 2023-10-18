const test_str = '   -333-4444sdd555   '

function fix_string(test_str: String, callback: Function){
	const re = /[^\d]/g;
	callback(test_str.trim().replace(re, ""))	
};

fix_string(test_str, function prnt_str(params: String) {
	if (params.length < 3){
		console.log(params)
	}else if (params.length == 3) {
		console.log(params + '-')
	} else if(3 < params.length && params.length < 7 ){
		console.log(params.slice(0, 3) + '-' + params.slice(3, params.length))
	} else	console.log(params.slice(0, 3) + '-' + params.slice(3, 7) + '-' + params.slice(7, 12))

})
