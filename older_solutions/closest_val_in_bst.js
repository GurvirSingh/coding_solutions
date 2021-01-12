function findClosestValueInBst(tree, target) {
	let closest = Infinity;
	let currentNode = null;
	let subValue = null;
	let closestVal = null;
	
	//tree.branch == null
	while(tree != null) {
		subValue = Math.abs(tree.value - target);
		closestVal = Math.abs(closest - target);
		
		//decides what should be the closest value
		if(subValue < closestVal) {
			closest = tree.value;
		} else if(subValue == 0) { //edge case of (target[tree.value] - target) will give 0
			return closest;
		}
		
		// compares current node with target and decides to go left or right
		if(target > tree.value) {
			tree = tree.right;
		} else {
			tree = tree.left;
		}
	} 
	return closest;

}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

