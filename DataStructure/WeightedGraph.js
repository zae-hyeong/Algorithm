class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  push(data) {
    this.heap.push(data);

    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;

    const min = this.heap[1];
    this.heap[1] = this.heap[this.size()];
    this.heap.pop();

    this.bubbleDown();

    return min;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  bubbleUp() {
    let currentIdx = this.size();

    while (currentIdx > 0) {
      const parentIdx = Math.floor(currentIdx / 2);
      if (this.heap[currentIdx] < this.heap[parentIdx])
        this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
    }
  }

  bubbleDown() {
    let currentIdx = 1;

    while (currentIdx * 2 < this.size()) {
      let leftIdx = currentIdx * 2;
      let rightIdx = currentIdx * 2 + 1;

      const smallerIdx =
        this.heap[leftIdx] < this.heap[rightIdx] ? leftIdx : rightIdx;

      this.swap(currentIdx, smallerIdx);
      currentIdx = smallerIdx;
    }
  }
}

class Graph {
  constructor() {
    this.map = new Map();
    this.numOfEdge = 0;
  }

  /** 방향성 있는 그래프 */
  buildGraph_directed(nodes) {
    for (const [nodeA, nodeB, weight] of nodes) {
      if (!this.map.has(nodeA)) {
        this.map.set(nodeA, new Map());
      }
      if (nodeB) {
        this.map.get(nodeA).set(nodeB, weight);
        this.numOfEdge++;
      }
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

  dijkstraStartFrom2(startNode) {
    const distances = {}; // 노드별 거리
    const paths = { [startNode]: [startNode] }; // 노드별 경로
    for (const node of this.map.keys()) {
      distances[node] = Infinity;
    }
    distances[startNode] = 0;

    // 최소 힙을 사용해서, 방문 예정인 노드 중에서 가장 작은 값을 가진 노드를 가져옴
    const minHeap = new MinHeap();
    minHeap.push([distances[startNode], startNode]);

    while (minHeap.size() > 0) {
      const [currentDistance, currentNode] = minHeap.pop();

      // 현재 노드의 거리 값이 큐에서 가져온 거리 값보다 크면, 해당 노드는 이미 처리한 것이므로 무시
      if (distances[currentNode] < currentDistance) continue;

      for (const adjacentNode of this.map.get(currentNode).keys()) {
        const weight = this.map.get(currentNode).get(adjacentNode);
        const distance = currentDistance + weight;

        if (distance < distances[adjacentNode]) {
          distances[adjacentNode] = distance;
          paths[adjacentNode] = [...paths[currentNode], adjacentNode];

          // 최소 경로가 갱신된 노드를 비용과 함께 최소 힙에 push
          minHeap.push([distance, adjacentNode]);
        }
      }
    }

    return [distances, paths];
  }

  bellmanFordStartFrom(startNode) {
    const distances = new Map();
    const prevNode = new Map();

    for (const node of this.map.keys()) {
      distances.set(node, Infinity);
      prevNode.set(node, null);
    }
    distances.set(startNode, 0);
    prevNode.set(startNode, startNode);

    // 최대 엣지 개수(node 개수 - 1)만큼 반복함
    for (let i = 0; i < this.map.size - 1; i++) {
      this.map.forEach((edgesOfCurrentNode, currentNode) => {
        for (const [neighborNode, weight] of edgesOfCurrentNode.entries()) {
          if (
            distances.get(neighborNode) >
            distances.get(currentNode) + weight
          ) {
            distances.set(neighborNode, distances.get(currentNode) + weight);
            prevNode.set(neighborNode, currentNode);
          }
        }
      });
    }

    // 한번 더 반복해서 음의 순환 찾기
    this.map.forEach((edgesOfCurrentNode, currentNode) => {
      for (const [neighborNode, weight] of edgesOfCurrentNode.entries()) {
        if (distances.get(neighborNode) > distances.get(currentNode) + weight) {
          return [-1];
        }
      }
    });

    return [distances, prevNode];
  }
}

(() => {
  //양의 가중치만 갖는 그래프
  const g1 = new Graph();
  g1.buildGraph_directed([
    ["A", "B", 9],
    ["A", "C", 3],
    ["B", "A", 5],
    ["C", "B", 1],
  ]);

  console.log(g1.dijkstraStartFrom2("A"));

  //음의 가중치를 갖는 그래프
  const g2 = new Graph();
  g2.buildGraph_directed([
    ["A", "B", 4],
    ["A", "C", 3],
    ["A", "E", -6],
    ["B", "D", 5],
    ["C", "B", 2],
    ["D", "A", 7],
    ["D", "C", 4],
    ["E", "C", 2],
  ]);

  console.log(g2.bellmanFordStartFrom("A"));

  //음의 순환을 갖는 그래프
  const g3 = new Graph();
  g3.buildGraph_directed([
    ["A", "B", 5],
    ["A", "C", -1],
    ["B", "C", 2],
    ["C", "D", -2],
    ["D", "A", 2],
    ["D", "B", 6],
  ]);

  console.log(g3.bellmanFordStartFrom("A"));
})();
