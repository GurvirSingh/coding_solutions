// create a BST in javascript
class BST { 
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = new BST(10);
root.left =  new BST(5);
root.right = new BST(20);
root.left.left = new BST(2);
root.right.left = new BST(11);

console.log(root);
console.log(root.right == null);