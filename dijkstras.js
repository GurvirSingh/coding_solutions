class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    // Method for adding an element to the line
    // The element that we pass will be an array with the nodes value at 0'th location and the weight at 1'st location
    enqueue(element) {
        if(this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for(let i = 1; i <= this.collection.length; i++) {
                if(element[1] < this.collection[i-1][1]) {
                    this.collection.splice(i-1, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added) {
                this.collection.push(element);
            }
        }
    };

    // Removes the first item in the array
    dequeue() {
        let value = this.collection.shift();
        return value;
    };

    isEmpty() {
        return (this.collection.length === 0);
    };
}

class graph {
    constructor() {
        this.nodes = [];
        this.adjacencyList = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjacencyList[node] = [];
    }

    addEdge(node1, node2, weight) {
        this.adjacencyList[node1].push({node:node2, weight:weight});
        this.adjacencyList[node2].push({node:node1, weight:weight});
    }
}

let map = new graph();
map.addNode("zero");
map.addNode("one");
map.addNode("two");
map.addNode("three");
map.addNode("four");
map.addNode("five");

map.addEdge("zero", "one", 1);
map.addEdge("zero", "two", 4);
map.addEdge("one", "two", 4);
map.addEdge("one", "three", 2);
map.addEdge("one", "four", 7);
map.addEdge("two", "three", 3);
map.addEdge("four", "two", 5);
map.addEdge("four", "three", 4);
map.addEdge("four", "five", 7);
map.addEdge("three", "five", 6);

console.log(map);

function dijkstras(startnode) {
    let parent = {};
    let visited = {};
    let cost = [];
    let startnodeIndex = Infinity;

    for(let i = 0; i < map.nodes.length; i++) {
        // Mark all visited as false
        visited[map.nodes[i]] =  false;

        // Mark all nodes as infinity distance
        cost[i] =  Infinity;

        // Get the index of the start node
        startnodeIndex = getCostIndex(startnode);
    }

    // Set the cost of startnode as 0
     cost[startnodeIndex] = 0;

    for(let i = 0; i < map.nodes.length; i++) {
        // Pick the mininum value node from the cost array
        let min = getMinimumFromArray(cost, visited);
        // console.log(min);
        let indexMin = indexOfMinimumFromArray(cost, min);
        // console.log(indexMin);

        // Set the value of the visited node as true
        visited[map.nodes[indexMin]] = true;
        
        // console.log(map.adjacencyList[map.nodes[min]]);
        console.log(`index min value ${indexMin}`);
        
        for(let j = 0; j < map.adjacencyList[map.nodes[indexMin]].length; j++) {
            let neighbour = map.adjacencyList[map.nodes[indexMin]][j].node;
            let neighbourCostIndex = getCostIndex(neighbour);
            // visited[neighbour] = true;
            if((map.adjacencyList[map.nodes[indexMin]][j].weight + min) < cost[neighbourCostIndex]) {
                cost[neighbourCostIndex] = (map.adjacencyList[map.nodes[indexMin]][j].weight + min);
            } else {
                console.log("Error in min calculation");
            }
        }


        // break;


    }

    console.log(visited);
    console.log(cost);
}

function getCostIndex(node) {
    for(let i = 0; i < map.nodes.length; i++) {
        if(map.nodes[i] == node) {
            return i;
        } 
    }
    return NaN;
}

function getMinimumFromArray(cost, visited) {
    var min;

    for(let i = 0; i < map.nodes.length; i++) {
        if(!visited[map.nodes[i]]) {
            min = cost[i];
            break;
        }
    }
    
    for(var i = 1; i < cost.length; i++) {
            if((cost[i] < min) && !visited[map.nodes[i]]) {
                min = cost[i];
            }
        }
    return min;
}

function indexOfMinimumFromArray(cost, min) {
    for(let i = 0; i < map.nodes.length; i++) {
        if(cost[i] == min) {
            return i;
        }
    }
}

dijkstras("zero");