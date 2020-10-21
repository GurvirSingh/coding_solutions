function bubbleSort(arr) {
    var len = arr.length, i = 0 ,j = 0, temp;

    for(i = 0;i < len;i++) {
        for(j = 0;j < len;j++) { 
            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    console.log(arr);
}

bubbleSort([1,5,4,6,8,9,9,8,6,4,3,2,3,23,4,-33,0]);

