function solution(n, computers) {
  const visited = Array.from({ length: n }, () => false);

  function _dfs(startComputer) {
    const stack = [startComputer];

    while (stack.length > 0) {
      const currentComputer = stack.pop();
      visited[currentComputer] = true;

      for (let neibhborComputer = 0; neibhborComputer < n; neibhborComputer++) {
        if (
          computers[currentComputer][neibhborComputer] &&
          !visited[neibhborComputer]
        )
          stack.push(neibhborComputer);
      }
    }
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    _dfs(i);
    count++;
  }

  return count;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
