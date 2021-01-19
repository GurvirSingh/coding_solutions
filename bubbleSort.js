//T-O(n^2), S-O(1);
const bubbleSort = (array) => {
    let isSorted = false;
    let counter = 0;

    while(!isSorted) {
        isSorted = true;
        for(let i = 0; i < array.length - counter; i++) {
            if(array[i] > array [i+1]){
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                isSorted = false;
            }
        }
        counter++;
    }
    return array;
};

console.log(bubbleSort([9,8,7,6,5,4,3,2]));
console.log(bubbleSort([1,2,2]));
