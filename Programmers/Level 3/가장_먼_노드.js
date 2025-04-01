const makeMapGraph = (edge) => {
  const map = new Map();

  edge.forEach(v => {
    const [n1, n2] = v;

    if (!map.has(n1)) map.set(n1, []);
    if (!map.has(n2)) map.set(n2, []);

    map.get(n1).push(n2);
    map.get(n2).push(n1);
  });

  return map;
}

function solution(n, edge) {
  const graph = makeMapGraph(edge);

  const distances = new Map();

  (function BFS() {
    const queue = [];
    

    queue.push([1, 0]); // [node, distance]

    while(queue.length > 0) {
      const [node, distance] = queue.shift();

      if (distances.has(node)) continue;
      
      distances.set(node, distance);
      
      const nearNodes = graph.get(node);
      nearNodes.forEach(v => {
        if (!distances.has(v)) queue.push([v, distance + 1]);
      });
    }
  }());

  const result = Array.from(distances.values()).sort((a, b) => a - b);
  return result.filter(v => v === result[result.length - 1]).length;

}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));
console.log(solution(5, [[1, 2], [1, 3], [1, 4], [1, 5]]));
// console.log(solution());