function maxChar(str) {
    const count = {};
    for(let i = 0; i < str.length; i++) {
        let ans = count[str[i]] ? count[str[i]]++ : count[str[i]] = 1;
    }
    console.log(count);
    let max = 0
    let index = 0;
    for(let j = 0; j < str.length; j++) { 
        if(count[str[j]] > max) { 
            max = count[str[j]];
            index = j;
        }
    }
    console.log(str[index] + " occurs max " + "with " + max + " occurences");
}

maxChar("87264iuashdfjhasdf hhhhhhsdjfhdjfhjdhfjdfhhhjdfhdjfh");

/* 
for (let chars of str) { 
    // iterates through each item in str 
}
*/