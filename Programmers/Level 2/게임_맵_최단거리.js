class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  isEmpty() {
    return this.head === this.tail;
  }

  push(data) {
    this.arr.push(data);
    this.tail++;
  }

  pop() {
    const returnVal = this.arr[this.head];
    this.head++;
    return returnVal;
  }
}

function solution(maps) {
  const visited = Array.from({ length: maps.length }, () =>
    Array.from({ length: maps[0].length }, () => -1)
  );
  visited[0][0] = 1;

  function _isValidMove(y, x) {
    return (
      y >= 0 &&
      y < maps.length &&
      x >= 0 &&
      x < maps[0].length &&
      maps[y][x] === 1
    );
  }

  const queue = new Queue();
  queue.push([0, 0]);

  const moves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  while (!queue.isEmpty()) {
    const [y, x] = queue.pop();

    for (const move of moves) {
      const [dy, dx] = [y + move[0], x + move[1]];

      if (_isValidMove(dy, dx) && visited[dy][dx] === -1) {
        visited[dy][dx] = visited[y][x] + 1;
        queue.push([dy, dx]);
      }
    }
  }

  return visited[visited.length - 1][visited[0].length - 1];
}

// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 0, 1],
//     [1, 1, 1, 0, 1],
//   ])
// );

console.log(
  solution([
    [1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1],
  ])
);
