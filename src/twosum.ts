export var twoSum = function(nums, target) {
    let len = nums.length
    let hashm = {}
	for (let index = 0; index < len; index++ ){
        const currentNum = nums[index]
        const numToFind = target - currentNum
        if (hashm[numToFind] >= 0){
			return [hashm[numToFind], index]
        }else{
            hashm[currentNum] = index
        }
	}
	return []
};