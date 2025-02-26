let givenInput = [];
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline
  .on("line", function (line) {
    givenInput.push(line.trim());
  })
  .on("close", function () {
    solution(givenInput);
    process.exit();
  });

class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  push(data) {
    this.arr.push(data);
    this.tail++;
  }

  pop = () => this.arr[this.head++];

  isNotEmpty = () => this.head !== this.tail;
}

function solution(inputs) {
  const N = +inputs[0];
  const [, ...picture] = inputs;

  const normalVisited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );

  const colorBlindVisited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );

  let numOfNormalArea = 0;
  let numOfColorBlindArea = 0;

  let numOfVisitedCell = 0;

  isValidMove = (y, x, visited, areaColor, isColorBlind) => {
    if (!(y >= 0 && y < N && x >= 0 && x < N && !visited[y][x])) return false;

    if (!isColorBlind || areaColor === "B") return picture[y][x] === areaColor;

    return picture[y][x] === "R" || picture[y][x] === "G";
  };

  findNotVistedCell = (targetVisited) => {
    for (let i = 0; i < N; i++)
      for (let j = 0; j < N; j++) if (!targetVisited[i][j]) return [i, j];
  };

  let queue = new Queue();
  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  // normal
  while (numOfVisitedCell < N ** 2) {
    queue.push(findNotVistedCell(normalVisited));

    while (queue.isNotEmpty()) {
      const [y, x] = queue.pop();
      normalVisited[y][x] = true;
      numOfVisitedCell++;

      for (const [dy, dx] of moves) {
        const [ny, nx] = [y + dy, x + dx];
        if (isValidMove(ny, nx, normalVisited, picture[y][x], false)) {
          queue.push([ny, nx]);
        }
      }
    }
    numOfNormalArea++;
  }

  // colorBlind
  numOfVisitedCell = 0;
  queue = new Queue();

  while (numOfVisitedCell < N ** 2) {
    queue.push(findNotVistedCell(colorBlindVisited));

    while (queue.isNotEmpty()) {
      const [y, x] = queue.pop();
      colorBlindVisited[y][x] = true;
      numOfVisitedCell++;

      for (const [dy, dx] of moves) {
        const [ny, nx] = [y + dy, x + dx];
        if (isValidMove(ny, nx, colorBlindVisited, picture[y][x], true)) {
          queue.push([ny, nx]);
        }
      }
    }
    numOfColorBlindArea++;
  }

  console.log(numOfNormalArea, numOfColorBlindArea);
}

console.log(solution(["5", "RRRBB", "GGBBB", "BBBRR", "BBRRR", "RRRRR"]));
