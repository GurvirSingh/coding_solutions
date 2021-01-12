function url(s) {
    const arr = s.split("");
    
    for(const i in arr) {
        if(arr[i] == " "){
            arr[i] = '%20';
        }
    }

    console.log(arr);

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == '%20') {
            if(arr[i+1] != '%20') {
                
            }
        }
    }

    console.log(arr.join(''));
}

const s = "Mr   Smith 20";
const ans = url(s);