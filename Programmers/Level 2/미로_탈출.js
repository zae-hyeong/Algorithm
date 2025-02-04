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

function solution(maps) {
  const M = maps.length;
  const N = maps[0].length;

  const visited = Array.from({ length: M }, () =>
    Array.from({ length: N }, () => Array.from({ length: 2 }, () => -1))
  );

  let start = [-1, -1];
  let exit = [-1, -1];

  maps.forEach((row, i) => {
    Array.from(row).forEach((v, j) => {
      if (v === "S") start = [i, j];
      if (v === "E") exit = [i, j];
    });
  });

  function _isValidMove(y, x) {
    return y >= 0 && y < M && x >= 0 && x < N && maps[y][x] !== "X";
  }

  const queue = new Queue();

  queue.push([...start, 0]); // y좌표, x좌표, lever 당겼는지 여부
  visited[start[0]][start[1]][0] = 0;

  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (!queue.isEmpty()) {
    const [y, x, leverFlag] = queue.pop();

    for (const [dy, dx] of moves) {
      const [ny, nx] = [y + dy, x + dx];

      if (_isValidMove(ny, nx) && visited[ny][nx][leverFlag] === -1) {
        let newLeverFlag =
          maps[ny][nx] === "L" ? 1 : leverFlag;

        queue.push([ny, nx, newLeverFlag]);
        visited[ny][nx][newLeverFlag] = visited[y][x][leverFlag] + 1;
      }
    }
  }

  console.log(visited);
  return visited[exit[0]][exit[1]][1];
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]));
