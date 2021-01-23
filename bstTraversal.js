//T-O(n), S-O(d)
class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function inOrderTraverse(tree, array) {
  if(tree !== null) {
		inOrderTraverse(tree.left, array);
		array.push(tree.value);
		inOrderTraverse(tree.right, array);
	}
	return array;
}

function preOrderTraverse(tree, array) {
   if(tree !== null) {
		array.push(tree.value);
		preOrderTraverse(tree.left, array);
		preOrderTraverse(tree.right, array);
	}
	return array;
}

function postOrderTraverse(tree, array) {
  if(tree !== null) {
		postOrderTraverse(tree.left, array);
		postOrderTraverse(tree.right, array);
		array.push(tree.value);
	}
	return array;
}

const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.right = new BST(22);

  console.log(inOrderTraverse(root, []));
  console.log(preOrderTraverse(root, []));
  console.log(postOrderTraverse(root, []));