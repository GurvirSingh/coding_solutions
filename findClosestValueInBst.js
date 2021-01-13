// T-O(log(n)), S-O(1)

function findClosestValueInBst(tree, target) {
    let currentMin = Infinity;
    let smallestValue = Infinity;
    let smallestNode = null;

    while(tree != null) {
        currentMin = Math.abs(tree.value - target);
        
        if(currentMin < smallestValue) {
            smallestValue = currentMin; 
            smallestNode = tree.value; 
        }

        if(tree.value == target) {
            return tree.value;
        } else if(tree.value > target) { 
            tree = tree.left;
        } else if(tree.value < target) { 
            tree = tree.right;
        }
    }
    return smallestNode;
};