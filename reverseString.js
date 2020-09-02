function reverse(str) { 
    var ans = "";
    for(let i = str.length - 1; i >= 0; i--) {
        ans = ans + str[i];
    }
    console.log(ans);
}

// str.split('').reverse().join('');

reverse('hello!');

/*  there is nothing at string position str.length hence we got undefined 
    we use str.length - 1 to remove that undefined 
    string indexing is the same as array indexing  
*/