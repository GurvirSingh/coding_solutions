class Graph {
    constructor() {
        this.node = [];
        this.adjacencyList = {};
    }

    addNode(node) {
        this.node.push(node);
        this.adjacencyList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push({node: node2});
        this.adjacencyList[node2].push({node: node1});
    }
};

let map = new Graph();
map.addNode("SF");
map.addNode("NYC");
map.addNode("TX");
map.addNode("CA");
map.addNode("AR");
map.addNode("MI");
map.addNode("AI");

console.log(map);

map.addEdge("SF", "NYC");
map.addEdge("NYC","AR");
map.addEdge("NYC","TX");
map.addEdge("SF","MI");
map.addEdge("MI","CA");
map.addEdge("MI","AI");

console.log(JSON.stringify(map));