// T- O(n), S- O(1)

const nthFibonacci = (n) => {
    let lastTwo = [0, 1];
    if(n <= 1) {
        if(n == 0) {
            return 0;
        } else {
            return 1;
        }
    }
    n = n - 2;
    while(n != 0) {
        let sum = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = sum;
        n--;
    }
    return lastTwo[1];
}

console.log(nthFibonacci(5));
console.log(nthFibonacci(12));
console.log(nthFibonacci(0));
console.log(nthFibonacci(1));
console.log(nthFibonacci(2));