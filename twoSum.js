const check = {};
function twoSum(nums, target) {

    for(let i = 0; i < nums.length; i++) {
        if(check[nums[i]] >= 0) {
            return [check[nums[i]], i];
        }
        check[target - nums[i]] = i;
    }
}

const nums = [1,3,5,6,7,2,1,2,78,3];
const target = 79;

const ans = twoSum(nums, target);
console.log(check);
console.log(ans);