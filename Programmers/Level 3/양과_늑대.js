class Tree {
  constructor() {
    this.info = new Map();
  }

  makeTree(edges) {
    for (const [p, c] of edges) {
      if (!this.info.has(p)) this.info.set(p, []);

      this.info.get(p).push(c);
    }
  }
}

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  push(data) {
    this.queue.push(data);
    this.tail++;
  }

  pop() {
    return this.queue[this.head++];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

function solution(nodeInfo, edges) {
  const tree = new Tree();
  tree.makeTree(edges);

  let maxNumOfSheep = 1;
  const queue = new Queue();

  queue.push([0, 0, [0]]); // 양의 수, 늑대 수, 처리할 노드들

  while (!queue.isEmpty()) {
    const [numOfSheep, numOfWolf, nextNodes] = queue.pop();
    maxNumOfSheep = Math.max(maxNumOfSheep, numOfSheep);

    if (numOfSheep !== 0 && numOfSheep <= numOfWolf) {
      continue;
    }

    nextNodes.forEach((node, i, arr) => {
      const newArr = [...arr];
      newArr.splice(i, 1);
      if (tree.info.get(node) !== undefined)
        newArr.push(...tree.info.get(node));

      if (nodeInfo[node] === 0) {
        queue.push([numOfSheep + 1, numOfWolf, newArr]);
      } else if (nodeInfo[node] === 1) {
        queue.push([numOfSheep, numOfWolf + 1, newArr]);
      }
    });
  }

  return maxNumOfSheep;
}

function solution2(info, edges) {
  function buildTree(info, edges) {
    const arr = Array.from({ length: info.length }, () => []);
    for (const [parents, child] of edges) {
      arr[parents].push(child);
    }
    return arr;
  }

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
// console.log(
//   solution(
//     [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
//     [
//       [0, 1],
//       [0, 2],
//       [1, 3],
//       [1, 4],
//       [2, 5],
//       [2, 6],
//       [3, 7],
//       [4, 8],
//       [6, 9],
//       [9, 10],
//     ]
//   )
// );
