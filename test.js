// Tree 

class Tree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let BST = new Tree(10);
BST.left = new Tree(9);
BST.right = new Tree(11);
BST.left.left = new Tree(8);
BST.left.right = new Tree(9);

console.log(BST);

// Graph 

class Graph {
    constructor() {
        this.nodes = [];
        this.adjacencyList = {};
    }

    addNode(name) {
        this.nodes.push(name);
        this.adjacencyList[name] = [];
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push({node: node2});
        this.adjacencyList[node2].push({node: node1});
    }
}

let map = new Graph();
map.addNode('SF');
map.addNode('NYC');
map.addNode('AU');
map.addEdge('SF', 'AU');
map.addEdge('SF', 'NYC');
map.addEdge('NYC', 'AU');

console.log(JSON.stringify(map));
