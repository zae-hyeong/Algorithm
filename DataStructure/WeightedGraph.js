class Graph {
  constructor() {
    this.map = new Map();
  }

  /** 방향성 있는 그래프 */
  buildGraph_directed(nodes) {
    for (const [nodeA, nodeB, weight] of nodes) {
      if (!this.map.has(nodeA)) {
        this.map.set(nodeA, new Map());
      }
      nodeB && this.map.get(nodeA).set(nodeB, weight);
    }
  }

  dijkstraStartFrom(startNode) {
    const notVisited = new Set();
    const table = new Map();

    // notVisited, table 초기화
    for (const node of this.map.keys()) {
      notVisited.add(node);
      table.set(node, { cost: Infinity, prevNode: null });
    }

    // 초기값(startNode 설정)
    table.set(startNode, { cost: 0, prevNode: startNode });
    let currentNode = startNode;

    // 모든 노드를 한번씩 방문할때까지
    while (notVisited.size > 0) {
      notVisited.delete(currentNode);

      // 이웃한 노드를 방문하면서 최소값/이전 노드 갱신
      this.map.get(currentNode).forEach((neighborNodeCost, neighborNode) => {
        const oldCost = table.get(neighborNode).cost;
        const newCost = table.get(currentNode).cost + neighborNodeCost;
        if (newCost < oldCost) {
          table.set(neighborNode, { cost: newCost, prevNode: currentNode });
        }
      });

      // 방문하지 않은 노드 중 현재 cost가 최소인 노드
      currentNode = Array.from(notVisited).sort(
        (a, b) => table.get(a).cost - table.get(b).cost
      )[0];
    }

    return table;
  }
}

(() => {
  const g1 = new Graph();
  g1.buildGraph_directed([
    ["A", "B", 9],
    ["A", "C", 3],
    ["B", "A", 5],
    ["C", "B", 1],
  ]);

  console.log(g1.map);
  console.log(g1.dijkstraStartFrom("A"));

  const g2 = new Graph();
  g2.buildGraph_directed([["A", "B", 1], ["B", "C", 5], ["C", "D", 1], ["D"]]);

  console.log(g2.map);

  console.log(g2.dijkstraStartFrom("A"));
})();
