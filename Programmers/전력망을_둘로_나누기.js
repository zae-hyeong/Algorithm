function _dfs(graph, node, parentNode) {
  let count = 1;

  graph[node].forEach((childNode) => {
    if (childNode !== parentNode) count += _dfs(graph, childNode, node);
  });
  return count;
}

function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    graph[a].push(b);
    graph[b].push(a);
  }

  let minDiff = Infinity;

  wires.forEach(([a, b]) => {
    graph[a].splice(graph[a].indexOf(b), 1);
    graph[b].splice(graph[b].indexOf(a), 1);

    minDiff = Math.min(minDiff, Math.abs(n - 2 * _dfs(graph, a, 0)));

    graph[a].push(b);
    graph[b].push(a);
  })

  return minDiff;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
