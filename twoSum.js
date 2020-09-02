function twoSum(nums, target) {
    const check = {};
    for(let i = 0; i < nums.length; i++) {
        if(check[nums[i]] >= 0) { 
            return[check[nums[i]], i];
        }
        check[target - nums[i]] = i;
    }
}