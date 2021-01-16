class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
          let currentNode = this;
          while(true){
              if(value < currentNode.value) {
                  if(currentNode.left === null) {
                      currentNode.left = new BST(value);
                      break;
                  } else {
                      currentNode = currentNode.left;
                  }
              } else {
                  if(currentNode.right === null) {
                      currentNode.right = new BST(value);
                      break;
                  } else {
                      currentNode = currentNode.right;
                  }
              }
          }
      return this;
    }
  
    contains(value) {
      let currentNode = this;
          while(currentNode) {
              if(currentNode.value === value) {
                  return true;
              } else if( currentNode.value < value) {
                  currentNode = currentNode.right;
              } else {
                  currentNode = currentNode.left;
              }
          }
          return false;
    }
  
    remove(value, parent = null) {
      if(value < this.value) {
              if(this.left !== null) {
                  this.left.remove(value, this);
              }
          } else if(value > this.value) {
              if(this.right !== null) {
                  this.right.remove(value, this);
              }
          } else {
              if(this.left !== null && this.right !== null) {
                  this.value = this.right.getMinValue();
                  this.right.remove(this.value, this);
              } else if(parent === null) {
                  if(this.left !== null) {
                      this.value = this.left.value;
                      this.right = this.left.right;
                      this.left  = this.left.left;
                  } else if(this.right !== null) {
                      this.value = this.right.value;
                      this.left = this.right.left;
                      this.right = this.right.right;
                  } else {
                      
                  }
              } else if( parent.left == this) {
                  parent.left = this.left !== null ? this.left:this.right;
              } else if( parent.right == this) {
                  parent.right = this.left !== null ? this.left:this.right;
              }
          }
      return this;
    }
      getMinValue() {
          if(this.left == null) {
              return this.value;
          } else {
              return this.left.getMinValue();
          }
      }	
  }

  let tree = new BST();
  tree.insert(10);
  tree.insert(2);
  tree.insert(12);
  tree.insert(8);
  tree.insert(70);
  tree.insert(1);

  console.log(JSON.stringify(tree));