const threeNumberSum = (array, targetValue) => {
    let triplets = [];
    let left = 1;
    let right = array.length - 1;

    array.sort((a,b) => a - b);

    for(let i = 0; i < array.length - 2; i++){
        left = i + 1;
        right = array.length - 1;
        while(left < right) {
            let sum = array[i] + array[left] + array[right];

            if(sum < targetValue) {
                left++;
            } else if( sum > targetValue) {
                right--;
            } else if(sum == targetValue) {
                triplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            }
        }
    }
    return triplets;
};

// -8, -6, 1, 2, 3, 5, 6, 12 targetValue = 0;

console.log(threeNumberSum([-8, -6, 1, 2, 3, 5, 6, 12], 0));