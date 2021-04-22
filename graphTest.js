class Graph {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Graph(name));
        return this;
    }

    breadthFirstSearch(array) {
        let queue = [this];
        while(queue.length > 0){
            let current = queue.shift();
            array.push(current.name);
            for(const child of current) {
                queue.push(child);
            }
        }
        return array;
    }
}

const graph = new Graph('A');
  graph.addChild('B').addChild('C').addChild('D');
  graph.children[0].addChild('E').addChild('F');
  graph.children[2].addChild('G').addChild('H');
  graph.children[0].children[1].addChild('I').addChild('J');
  graph.children[2].children[0].addChild('K');
  console.log(graph.depthFirstSearch([]));

  console.log(graph);