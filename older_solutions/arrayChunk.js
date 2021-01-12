function arrayChunk(arr, size) {
    let numArr = Math.ceil(arr.length / size);
    let count = 0;
    let inc = size;
    for(let i = 1; i <= numArr; i++) { 
        let newArr = [];

        let newArrj = 0;
        for(let j = count; j < size; j++) {
            if(arr[j] !== undefined) {
                newArr[newArrj] = arr[j];
            }
            newArrj++;
        }
        count = count + inc;
        size  = size + inc;

        console.log(newArr);
    }
}

var arr = [1,2,3,4,5,6,7]
size = 12
arrayChunk(arr, size);