class Node {
  constructor(value, weight) {
    this.value = value;
    this.weight = weight;
  }

  setNext(node) {}
}

class Graph {
  constructor() {
    this.map = new Map();
  }

  /** 방향성 없는 그래프 */
  buildGraph(nodes) {
    for (const [nodeA, nodeB] of nodes) {
      if (!this.map.has(nodeA)) {
        this.map.set(nodeA, []);
      }
      this.map.get(nodeA).push(new Node(nodeB, 0));

      if (!this.map.has(nodeB)) {
        this.map.set(nodeB, []);
      }
      this.map.get(nodeB).push(new Node(nodeA, 0));
    }
  }

  /** 방향성 있는 그래프 */
  buildGraph_directed(nodes) {
    for (const [nodeA, nodeB] of nodes) {
      if (!this.map.has(nodeA)) {
        this.map.set(nodeA, []);
      }
      this.map.get(nodeA).push(new Node(nodeB, 0));
    }
  }

  BFSStartBy(nodeValue) {
    const stack = [];
    const visited = new Set();
    const result = [];

    stack.push(nodeValue);

    while (stack.length !== 0) {
      const currentNodeValue = stack.pop();
      if (visited.has(currentNodeValue)) continue;

      visited.add(currentNodeValue);
      result.push(currentNodeValue);

      this.map
        .get(currentNodeValue)
        .reverse()
        .forEach((connectedNode) => {
          stack.push(connectedNode.value);
        });
    }

    return result;
  }

  DFSStartBy(nodeValue) {
    const queue = [];
    const visited = new Set();
    const result = [];

    queue.push(nodeValue);

    while (queue.length !== 0) {
      const currentNodeValue = queue.shift();
      if (visited.has(currentNodeValue)) continue;

      visited.add(currentNodeValue);
      result.push(currentNodeValue);

      this.map.get(currentNodeValue).forEach((connectedNode) => {
        queue.push(connectedNode.value);
      });
    }

    return result;
  }
}

(() => {
  // const g1 = new Graph();
  // g1.buildGraph([
  //   ["A", "B"],
  //   ["B", "C"],
  //   ["C", "D"],
  //   ["D", "E"],
  // ]);

  // console.log(g1.BFSStartBy('A'));

  const g2 = new Graph();
  g2.buildGraph([
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],
    ["B", "E"],
    ["C", "F"],
    ["E", "F"],
  ]);

  console.log(g2.DFSStartBy("A"));
})();
