// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
      const sums = []
      let calcSum = 0;
      
      getSums(root, calcSum, sums)
      return sums;
  }
  
  function getSums(node, calcSum, sums) {
      if(node == null) {
          return;
      }
      
      calcSum = calcSum + node.value;
      if(node.left == null && node.right == null) {
          sums.push(calcSum);
      }
      
      getSums(node.left, calcSum, sums);
      getSums(node.right, calcSum, sums);
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  