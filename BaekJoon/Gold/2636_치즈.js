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

/**
 * @param {Array<string>} inputLines
 */
function solution(inputLines) {
  const [M, N] = inputLines[0].split(" ").map((v) => +v);
  const [, ...board] = inputLines.map((line) => line.split(" ").map((v) =>  Number(v)));

  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function isValidMove(y, x, visited) {
    return y >= 0 && y < M && x >= 0 && x < N && visited[y][x] !== 1;
  }

  function bfs() {
    const visited = Array.from({ length: M }, () => Array(N).fill(0));
    visited[0][0] = 1;

    let numOfRemovedCheese = 0;

    const queue = [];
    queue.push([0, 0]);

    let y, x, ny, nx;

    while (queue.length > 0) {
      [y, x] = queue.shift();
      
      for (let [dy, dx] of moves) {
        [ny, nx] = [y + dy, x + dx];

        if (!isValidMove(ny, nx, visited)) continue;

        if (board[ny][nx] === 1) {
          board[ny][nx] = 0;
          visited[ny][nx] = 1;
          numOfRemovedCheese++;
          //큐에 넣진 않는다(더 깊이 들어가지 못하도록)
          continue;
        }
        visited[ny][nx] = 1;
        queue.push([ny, nx]);
      }
    }
    // console.table(board);

    return numOfRemovedCheese;
  }

  const removedCheese = [];
  while (removedCheese.at(-1) !== 0) {
    removedCheese.push(bfs());
  }

  console.log(removedCheese.length - 1);
  console.log(removedCheese.at(-2));
}


solution([
  "13 12",
  "0 0 0 0 0 0 0 0 0 0 0 0",
  "0 0 0 0 0 0 0 0 0 0 0 0",
  "0 0 0 0 0 0 0 1 1 0 0 0",
  "0 1 1 1 0 0 0 1 1 0 0 0",
  "0 1 1 1 1 1 1 0 0 0 0 0",
  "0 1 1 1 1 1 0 1 1 0 0 0",
  "0 1 1 1 1 0 0 1 1 0 0 0",
  "0 0 1 1 0 0 0 1 1 0 0 0",
  "0 0 1 1 1 1 1 1 1 0 0 0",
  "0 0 1 1 1 1 1 1 1 0 0 0",
  "0 0 1 1 1 1 1 1 1 0 0 0",
  "0 0 1 1 1 1 1 1 1 0 0 0",
  "0 0 0 0 0 0 0 0 0 0 0 0",
]);

// solution([
//   '5 5',
//   '0 0 0 0 0',
//   '0 1 1 1 0',
//   '0 1 1 1 0',
//   '0 1 1 1 0',
//   '0 0 0 0 0',
// ])