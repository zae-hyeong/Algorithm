class Queue {
  constructor() {
    this.q = [];
    this.front = 0;
    this.rear = 0;
  }

  push(data) {
    this.q.push(data);
    this.rear++;
  }

  pop() {
    return this.q[this.front++];
  }

  isNotEmpty() {
    return this.front !== this.rear;
  }
}

function buildTree(info, edges) {
  const arr = Array.from({ length: info.length }, () => []);
  for (const [parents, child] of edges) {
    arr[parents].push(child);
  }

  return arr;
}

function solution(info, edges) {
  const tree = buildTree(info, edges);

  let maxSheep = 0;

  const queue = new Queue();
  queue.push([0, 1, 0, new Set()]); // 현재 인덱스, 양의 수, 늑대의 수, 방문한 노드 집합

  while (queue.isNotEmpty()) {
    const [currentNode, numOfSheep, numOfWolf, visited] = queue.pop();

    maxSheep = Math.max(maxSheep, numOfSheep);

    for (const childNode of tree[currentNode]) {
      visited.add(childNode);
    }

    for (const childNode of visited) {
      if (info[childNode]) {
        // 늑대인 경우
        if (numOfSheep !== numOfWolf + 1) {
          // 여전히 양이 더 많은 경우
          const newVisited = new Set(visited);
          newVisited.delete(childNode); //visited에서 삭제
          queue.push([childNode, numOfSheep, numOfWolf + 1, newVisited]);
        }
      } else {
        //양인 경우
        const newVisited = new Set(visited);
        newVisited.delete(childNode); //visited에서 삭제
        queue.push([childNode, numOfSheep + 1, numOfWolf, newVisited]);
      }
    }
  }

  return maxSheep;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);
console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);
