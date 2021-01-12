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
map.addNode("sf");
map.addNode("seattle");
map.addNode("idaho");
map.addNode("chicago");
map.addNode("nyc");

map.addEdge("sf", "seattle", 3);
map.addEdge("sf", "idaho", 5);
map.addEdge("seattle", "idaho", 1);
map.addEdge("seattle", "chicago", 2);
map.addEdge("chicago", "nyc", 1);
map.addEdge("chicago", "idaho", 3);
map.addEdge("idaho", "nyc", 1);

console.log(map);

function findPathWithDijkstra(startNode, endNode) {
    let times = {};
    let backtrace = {};
    let pq = new PriorityQueue();

    times[startNode] = 0;

    map.nodes.forEach(node => {
        if(node !== startNode) {
            times[node] = Infinity;
        }
    });
    
    pq.enqueue([startNode, 0]);

    while(!pq.isEmpty()) {
        let shortestStep = pq.dequeue();
        let currentNode = shortestStep[0];

        this.adjacencyList[currentNode].forEach(neighbor => {
            let time = times[currentNode] + neighbor.weight;
            if(time < times[neighbor.node]) {
                times[neighbor.node] = time;
                backtrace[neighbor.node] = currentNode;
                pq.enqueue([neighbor.node, time]);
            }
        });
    }

    let path = [endNode];
    let lastStep = endNode;

    while(lastStep !== startNode) {
        path.unshift(backtrace[lastStep]);
        lastStep = backtrace[lastStep];
    }

    return `Path is ${path} and time is ${times[endNode]}`;
};
let test = findPathWithDijkstra("sf", "nyc");
console.log(test);

