//T-O(n) S-O(n)

const branchSum = (root) => {
    const sums = [];
    calcSums(root, 0, sums);
    return sums;
}

function calcSums(root, runningSum, sums) {
    if(!root) return;

    const newRunningSum = runningSum + root.value;

    if(!root.left && !root.right) {
        sums.push(newRunningSum);
        return;
    }

    calcSums(root.left, newRunningSum, sums);
    calcSums(root.right, newRunningSum, sums);
}