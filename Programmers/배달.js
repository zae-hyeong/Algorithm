function solution(N, roads, K) {
  const queue = [];

  const minDistance = new Array(N + 1).fill(Infinity);
  minDistance[1] = 0;

  const graph = Array.from({length: N + 1},() => []);
  roads.forEach(([c1, c2, weight]) => {
    graph[c1].push({ nextNode: c2, weight: weight });
    graph[c2].push({ nextNode: c1, weight: weight });
  });

  queue.push([0, 1]);   // [startNodeDistance, startNode];

  while (queue.length) {
    const [nodeDistance, node] = queue.pop();

    graph[node].forEach(({ nextNode, weight }) => {
      const newWeight = minDistance[node] + weight;

      if (minDistance[nextNode] > newWeight) {
        minDistance[nextNode] = newWeight;
        queue.push([newWeight, nextNode]);   // [nodeDistance, node]
      }
    });
  }

  return minDistance.filter((w) => w <= K, 0).length;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
);
