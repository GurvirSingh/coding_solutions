// T- O(n), S- O(d), where d is the maximum depth of the sub arrays

const productSum = (array, multiplier = 1) => {
    let currentSum = 0;
    for(const el of array) {
        if(Array.isArray(el)) {
            currentSum += productSum(el, multiplier + 1);
        } else {
            currentSum += el;
        }
    }
    return currentSum * multiplier;
};

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));