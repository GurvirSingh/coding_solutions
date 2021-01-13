// T- O(n), S-O(n)

const twoSum = (array, target) => {
    const check = {};

    for(let i = 0; i < array.length; i++) {
        if(check[array[i]] >= 0) {
            return [array[i], array[check[array[i]]]];
        }
        check[target - array[i]] = i;
    }
    return [];
}

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10));