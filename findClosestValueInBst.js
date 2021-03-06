// T-O(log(n)), S-O(1)

function findClosestValueInBst(tree, target) {
    let currentMin = Infinity;
    let smallestValue = Infinity;
    let smallestNode = null;

  while(tree != null) {
      currentMin = Math.abs(target - tree.value);
      
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
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);
const actual = findClosestValueInBst(root, 11);
console.log(actual);

console.log(root);
console.log(BST);