// T - O(n)
// S - O(1)

// Alternate solution 
// const reverseSplitJoin = (num) => {
//     let reverseNum = parseInt(Math.abs(num).toString().split("").reverse().join(""));
//     return reverseNum * Math.sign(num);
// }

// console.log(reverseSplitJoin(-123));
// console.log(reverseSplitJoin(456));


const reverseSignedNumber = (num) => {
    let sign = 1;
    let reverseNum = 0;
    let digit;
 
    if(num < 0) {
        sign = -1;
        num = Math.abs(num);
    }

    while(num) {
        digit = num % 10;
        num = Math.floor(num / 10);
        reverseNum = (reverseNum * 10) + digit;
    }

    return (reverseNum * sign);
};

console.log(reverseSignedNumber(-342));
console.log(reverseSignedNumber(-3));
console.log(reverseSignedNumber(142));