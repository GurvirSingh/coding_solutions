const maxSubArray = (nums) => {
    let maxSoFar = nums[0];
    let maxAtThisPoint = nums[0];

    for(let i = 0; i < nums.length; i++) {
        maxAtThisPoint = Math.max(maxAtThisPoint + nums[i], nums[i]);
        maxSoFar = Math.max(maxSoFar, maxAtThisPoint);
    }
    return maxSoFar;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));