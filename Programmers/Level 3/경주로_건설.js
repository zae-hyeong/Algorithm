function solution(board) {
  const M = board.length; //세로
  const N = board[0].length; //가로

  const visited = Array.from({ length: M }, () => Array(N).fill(Infinity));
  visited[0][0] = 0;

  function isValidMove(y, x) {
    return y >= 0 && y < M && x >= 0 && x < N && board[y][x] !== 1;
  }

  function getAdditionalCost(currentDirection, dy, dx) {
    return currentDirection === null
      ? 100
      : currentDirection[0] === dy && currentDirection[1] === dx
      ? 100
      : 600;
  }

  function makeRoute(y, x, cost, currentDirection) {
    if (y === M - 1 && x === N - 1) return;

    const moves = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (const [dy, dx] of moves) {
      const ny = y + dy;
      const nx = x + dx;

      if (isValidMove(ny, nx) && visited[ny][nx] > cost) {
        const additionalCost = getAdditionalCost(currentDirection, dy, dx);

        visited[ny][nx] = cost + additionalCost;
        makeRoute(ny, nx, visited[ny][nx], [dy, dx]);
      }
    }
  }

  makeRoute(0, 0, 0, null);
  console.log(visited);
  return visited[M - 1][N - 1];
}

function solution(board) {
  const M = board.length; //세로
  const N = board[0].length; //가로

  const visited = Array.from({ length: M }, () => Array(N).fill(Infinity));
  visited[0][0] = 0;

  function isValidMove(y, x) {
    return y >= 0 && y < M && x >= 0 && x < N && board[y][x] !== 1;
  }

  function makeRoute(y, x, cost, currentDirection) {
    if (y === M - 1 && x === N - 1) return;

    const moves = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (const [dy, dx] of moves) {
      const ny = y + dy;
      const nx = x + dx;

      if (isValidMove(ny, nx) && visited[ny][nx] > cost) {
        const additionalCost =
          currentDirection === null
            ? 100
            : currentDirection[0] === dy && currentDirection[1] === dx
            ? 100
            : 600;
        visited[ny][nx] = cost + additionalCost;
        makeRoute(ny, nx, visited[ny][nx], [dy, dx]);
      }
    }
  }

  makeRoute(0, 0, 0, null);
  console.table(visited);
  return visited[M - 1][N - 1];
}

console.log(
  solution([
    [0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  ])
);
