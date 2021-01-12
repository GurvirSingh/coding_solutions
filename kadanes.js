// T - O(n)
// S - O(1)

const maxSubArray = (array) => {
    let maxAtCurrent = array[0];
    let maxGlobal = array[0];

    for(let i = 1; i < array.length; i++) {
        maxAtCurrent = Math.max(maxAtCurrent + array[i], array[i]);
        maxGlobal = Math.max(maxGlobal, maxAtCurrent);
    }

    return maxGlobal;
};

console.log(maxSubArray([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]));