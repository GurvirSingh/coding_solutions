const twoSum = (array, targetValue) => {
    const check = {};

    for(let i = 0; i < array.length; i++) {
        if(check[array[i]] >= 0) {
            return [array[i], array[check[array[i]]]];
        }
        check[targetValue - array[i]] = i;
    }
};

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoSum([4, 6], 10));
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17));