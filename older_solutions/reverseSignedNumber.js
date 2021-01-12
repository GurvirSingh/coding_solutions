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