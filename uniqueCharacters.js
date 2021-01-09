// function uniqueCharacters(s) {
//     const temp = s.split("");
//     const unique = new Set(temp);

//     return unique;
// }

// const s = 'kjashdfkjhasfdfgjkhaxclkvbzxvblakjsdhflkajshdflkjashfdlkasjdf';
// const ans = uniqueCharacters(s);
// console.log(ans);

function uniqueCharacters(s) {
    const check = {};

    if(s.length > 128) {
        return false;
    }

    for(const value of s) {
        console.log(value);
        if(check[value]) {
            return false;
        }
        check[value] = true;
    }
    return true;
}

const s = 'abcdefghijklmnopqrstuvwxyz';
const ans = uniqueCharacters(s);
console.log(ans);