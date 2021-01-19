//T- O(n^2), S- O(1)
const selectionSort = (array) => {
    let startIdx = 0;

    while(startIdx < array.length - 1) {
        let smallestIdx = startIdx;

        for(let i = startIdx + 1; i < array.length; i++) {
            if(array[smallestIdx] > array[i]) {
                smallestIdx = i;
            }
        }
        swap(smallestIdx, startIdx, array);
        startIdx++;
    }
    return array;
};

const swap = (smallestIdx, startIdx, array) => {
    let temp = array[smallestIdx];
    array[smallestIdx] = array[startIdx];
    array[startIdx] = temp;
};

console.log(selectionSort([7,8,1,0,9,10,233,8]));