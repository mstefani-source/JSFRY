let x = 1
function outer(){
	console.log(x)
	{
		var x = 2;
		function inner(){
			console.log(x);
		}
		inner()
	}
}

outer()