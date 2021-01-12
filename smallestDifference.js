// T - O(nlogn + mlogm)
// S - O(1)

const smallestDifference = (array1, array2) => {
    array1.sort((a,b) => a - b);
    array2.sort((a,b) => a - b);

    let idxArray1 = 0;
    let idxArray2 = 0;

    let currentSum = Infinity;
    let smallestSum = Infinity;

    let smallestArray = [];
    
    while(idxArray1 < array1.length && idxArray2 < array2.length) {
        currentSum = Math.abs(array1[idxArray1] - array2[idxArray2]);

        if(currentSum < smallestSum) {
            smallestSum = currentSum;
            smallestArray = [array1[idxArray1], array2[idxArray2]];
        }

        if(array1[idxArray1] < array2[idxArray2]) {
            idxArray1++;
        } else if(array1[idxArray1] > array2[idxArray2]) {
            idxArray2++;
        } else {
            return smallestArray;
        }
    } 
    return smallestArray;
};

console.log(smallestDifference([10, 0, 20, 25], [1005, 1006, 1014, 1032, 1031]));