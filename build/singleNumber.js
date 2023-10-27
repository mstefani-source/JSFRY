/**
 * 
 * @param {Number[]} nums
 * @returns {Number} 
 */


const getSingleNumber = (nums) => {
	// реализуй функцию getSingleNumber
	let res = {}
	nums.forEach(el=>{
		if (res[el]){
			res[el] = res[el] + 1
		}else{
			res[el] = 1
		}
	})

	for (const [k,v] of Object.entries(res)){
		if(v == 1) return Number(k)
	}
	return Number(res)
  }
  
  

  console.log(getSingleNumber([2, 2, 1])); // 1
  console.log(getSingleNumber([4, 1, 2, 1, 2])); // 4
  console.log(getSingleNumber([4, 1, 2, 1, 2, 4])); // 4

