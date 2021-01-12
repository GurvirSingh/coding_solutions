function palindrome(str) { 
    let ans = '';
    for(let i = str.length - 1; i >= 0; i--) {
        ans = ans + str[i];
    }
    console.log(ans == str);
}

/*
str.split('').every(() = > {
    return char === str[str.length - i - 1];
});
*/

palindrome('abba');
palindrome('kjhsdaf');
palindrome('aaaahhhhvvvvvvvvhhhhaaaa');