//T- O(n^2), S- O(1)
const insertionSort = (array) => {
    for(let i = 0; i < array.length; i++) {
        let j = i;

        while(j > 0 && array[j] < array[j - 1]){
            swap(j, j - 1, array);
            j--;
        }
    }
    return array;
};

const swap = (i, j, array) => {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
};

console.log(insertionSort([4,5,81,9]));