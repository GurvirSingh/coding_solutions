//T-O(n) S-O(n)

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    insert(values, i = 0) {
        if (i >= values.length) return;
        const queue = [this];
        while (queue.length > 0) {
          let current = queue.shift();
          if (current.left === null) {
            current.left = new BinaryTree(values[i]);
            break;
          }
          queue.push(current.left);
          if (current.right === null) {
            current.right = new BinaryTree(values[i]);
            break;
          }
          queue.push(current.right);
        }
        this.insert(values, i + 1);
        return this;
      }
  }
  
  function branchSums(root) {
      const sums = [];
      getSums(root, 0, sums);
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
  

  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log(tree);
  console.log(branchSums(tree));
  