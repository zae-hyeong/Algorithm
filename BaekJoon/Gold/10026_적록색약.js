// let givenInput = [];
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline
//   .on("line", function (line) {
//     givenInput.push(line.trim());
//   })
//   .on("close", function () {
//     solution(givenInput);
//     process.exit();
//   });

function solution(inputs) {
  const N = +inputs.shift();
  let picture = inputs.map((v) => v.split(""));

  function checkNumOfArea() {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let num = 0;

    const moves = [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ];
  
    const isValidMove = (y, x, color) =>
      y >= 0 &&
      y < N &&
      x >= 0 &&
      x < N &&
      !visited[y][x] &&
      picture[y][x] === color;
  
    const dfs = (y, x, color) => {
      visited[y][x] = true;
  
      for (const [dy, dx] of moves) {
        const [ny, nx] = [y + dy, x + dx];
        if (isValidMove(ny, nx, color)) {
          dfs(ny, nx, color);
        }
      }
    };

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
          dfs(i, j, picture[i][j]);
          num++;
        }
      }
    }
    return num;
  }

  const numOfNormalArea = checkNumOfArea();

  picture = picture.map((line) => line.map((v) => (v === "R" || v === "G" ? "#" : v)));
  const numOfColorBlindArea = checkNumOfArea();

  console.log(numOfNormalArea, numOfColorBlindArea);
}

console.log(solution(["5", "RRRBB", "GGBBB", "BBBRR", "BBRRR", "RRRRR"]));
