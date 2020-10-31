class graph {
    constructor() {
        this.node = [];
        this.adjacencyList = {};
    }

    addNode(node) {
        this.node.push(node);
        this.adjacencyList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push({node:node2});
        this.adjacencyList[node2].push({node:node1});
    }
}

let map = new graph();
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

function dfs(startNode) {
    // console.log(startNode);
    let visited = {};

    // Declare all visited as false
    for(let i = 0; i < map.node.length; i++) {
        visited[map.node[i]] = false;
    }

    // Push and pop methods
    let stack = []; 
    let op = [];

    // Push the start node to the stack
    stack.push(startNode);
    op.push(startNode);

    visited[startNode] = true;

    // Check if neighbours exists
    let neighbourExists_check = neighbourExists(startNode); 

    var allNeighbour = 0;
    // let run = 0; 
    if(neighbourExists_check) {
        while(stack.length !== 0) {
            // console.log(stack);
            // console.log(startNode, allNeighbour);

            // map.adjacencyList[startNode][allNeighbour].node || 

            // console.log(`first if ${map.adjacencyList[startNode][allNeighbour]}`);
            if(map.adjacencyList[startNode][allNeighbour]) {
                // console.log(`visited ${visited[map.adjacencyList[startNode][allNeighbour].node]}`);
                // console.log(`second if checking visited object ${visited[map.adjacencyList[startNode][allNeighbour].node]}`);
                if(visited[map.adjacencyList[startNode][allNeighbour].node]) {
                    allNeighbour++;
                } else {
                    // console.log(`stack push ${map.adjacencyList[startNode][allNeighbour].node}`);
                    stack.push(map.adjacencyList[startNode][allNeighbour].node);
                    op.push(map.adjacencyList[startNode][allNeighbour].node);
                    visited[map.adjacencyList[startNode][allNeighbour].node] = true;
                    // console.log(visited);
                    startNode = map.adjacencyList[startNode][allNeighbour].node;
                    allNeighbour = 0;
                }
            } else {
                // console.log(`Stack pop ${stack.pop()}`);
                stack.pop();
                startNode = stack[stack.length - 1];
                // console.log(`Stack startNode ${startNode}`);
                allNeighbour = 0;
            }
            // run++;
        }
    } else {
        console.log(startNode);
    }

    console.log(visited);
    console.log(stack);
    console.log("Output:" + op);
    
}

function getIndexOfNode(node) {
    let i = 0;
    for(i = 0; i < map.node.length; i++) {
        if(map.node[i] == node) {
            return i;
        }
    }
   return NaN;
}

function neighbourExists(node) {
    if(map.adjacencyList[node].length > 0) {
        return true;
    }
    return false;
}

dfs('SF');