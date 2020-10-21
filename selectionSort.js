function selectionSort(arr) {
    var len = arr.length;
    var min;

    for(var i = 0;i < len;i++) {
        min = i
        for(var j = i + 1;j < len;j++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        if(min !== i) {
            var temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    console.log(arr)
}

selectionSort([3,2,1,0,234,66,9,1,2,-3,987]);