class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function binaryTreeDiameter(tree) {
      return getTreeInfo(tree).diameter;
  }
  
  function getTreeInfo(tree) {
      if(tree === null) return new TreeInfo(0, 0);
      
      const leftTreeInfo = getTreeInfo(tree.left);
      const rightTreeInfo = getTreeInfo(tree.right);
      
      const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
      const maxDiameter = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
      const currentDiameter = Math.max(longestPathThroughRoot, maxDiameter);
      const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);
      
      return new TreeInfo(currentDiameter, currentHeight);
  }
  
  class TreeInfo {
      constructor(diameter, height) {
          this.diameter = diameter;
          this.height = height;
      }
  }

const root = new BinaryTree(1);
root.left = new BinaryTree(3);
root.left.left = new BinaryTree(7);
root.left.left.left = new BinaryTree(8);
root.left.left.left.left = new BinaryTree(9);
root.left.right = new BinaryTree(4);
root.left.right.right = new BinaryTree(5);
root.left.right.right.right = new BinaryTree(6);
root.right = new BinaryTree(2);

console.log(root);
const actual = binaryTreeDiameter(root);
console.log(actual);