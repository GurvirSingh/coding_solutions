//T-O(n), S-O(1)
const threeLargesNo = (array) => {
    const triplets = [-Infinity, -Infinity, -Infinity];

    for(const el of array) {
        if(el > triplets[2]) {
            shiftAndAdd(el, 2, triplets);
        } else if(el > triplets[1]) {
            shiftAndAdd(el, 1, triplets);
        } else if(el > triplets[0]) {
            shiftAndAdd(el, 0, triplets);
        }
    }
    return triplets;
};

const shiftAndAdd = (el, shift, triplets) => {
    for(let i = 0; i <= shift; i++) {
        if(shift == i) {
            triplets[i] = el;
        } else {
            triplets[i] = triplets[i + 1];
        }
    }
};

console.log(threeLargesNo([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));
