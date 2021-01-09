const check = {};

function StringPermutations(s1, s2) {
    if(s1.length !== s2.length) {
        return false;
    }
    for(const s1Helper of s1) {
        if(!check[s1Helper]) {
            check[s1Helper] = 1;
        } else {
            check[s1Helper] = check[s1Helper] + 1;
        }
    }

    console.log(check);

    for(const s2Helper of s2) {
        check[s2Helper] = check[s2Helper] - 1;
    }

    console.log(check);

    for(const prop in check) {
        if(check[prop] != 0) {
            return false;
        }
    }
    return true;
}

const s1 = 'dogdogdogdoo';
const s2 = 'godgodgodgod';

const ans = StringPermutations(s1, s2);
console.log(ans);