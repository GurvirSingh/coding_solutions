// check sol file

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const stack = [];
	const visited = {};
	let calSum = root;
	let ans = [];
	
	stack.push(root.value); //push root node to stack
	
	while(stack.length != 0) { //until stack is empty
			if(stack[stack.length - 1].left != null && visited[stack[stack.length - 1].left] == undefined) {
				stack.push(stack[stack.length - 1].left);
				calSum = calSum + stack[stack.length - 1];
			} else if(stack[stack.length - 1].right != null && visited[stack[stack.length - 1].right] == undefined) {
				stack.push(stack[stack.length - 1].right);
				calSum = calSum + stack[stack.length - 1];
			} else {
				visited[stack[stack.length - 1]] = true;
				if(stack[stack.length - 1].left != null && stack[stack.length - 1].right != null){
					ans.push(calSum);
				}
				calSum = calSum - stack.pop();
			}
	}
	return ans;
}

