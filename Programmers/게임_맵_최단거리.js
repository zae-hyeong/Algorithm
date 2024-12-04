class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  push(data) {
    this.arr.push(data);
    this.tail++;
    this.size++;
  }

  pop() {
    // const returnVal = this.arr[this.head];
    // this.head++;
    // this.size--;
    // return returnVal;
    this.size--;
    return this.arr[this.head++];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

function isAvailableMove(yLength, xLength, yCurrent, xCurrent, maps, visited) {
  if (
    yCurrent >= yLength ||
    xCurrent >= xLength ||
    xCurrent < 0 ||
    yCurrent < 0 ||
    maps[yCurrent][xCurrent] === 0
  )
    return false;
  return true;
}

function solution(maps) {
  const yLength = maps.length;
  const xLength = maps[0].length;

  const endIdx = [yLength - 1, xLength - 1];

  const distances = Array.from({ length: yLength }, () =>
    Array(xLength).fill(-1)
  );

  const queue = new Queue();

  queue.push([0, 0]);
  distances[0][0] = 1;

  const move = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (!queue.isEmpty()) {
    const currentIdx = queue.pop();

    if (endIdx[0] === currentIdx[0] && endIdx[1] === currentIdx[1])
      return distances[endIdx[0]][endIdx[1]];

    for (const [dy, dx] of move) {
      const nextIdx = [currentIdx[0] + dy, currentIdx[1] + dx];

      if (!isAvailableMove(yLength, xLength, nextIdx[0], nextIdx[1], maps))
        continue;

      if (distances[nextIdx[0]][nextIdx[1]] === -1) {
        queue.push(nextIdx);
        distances[nextIdx[0]][nextIdx[1]] =
          distances[currentIdx[0]][currentIdx[1]] + 1;
      }
    }
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
