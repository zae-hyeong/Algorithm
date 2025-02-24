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
  const [N, target] = inputLines.map((v) => +v);

  const resultArr = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => null)
  );
  let targetCor = [null, null];

  const moves = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let moveIdx = 0;

  const isValidMove = (y, x) =>
    y >= 0 && y < N && x >= 0 && x < N && resultArr[y][x] === null;

  let num = N ** 2;
  let currentCor = [0, 0];

  while (num > 0) {
    if (num === target) targetCor = currentCor;
    resultArr[currentCor[0]][currentCor[1]] = num--;

    //이동 가능 여부에 따라 다음 좌표의 방향을 설정함
    moveIdx = isValidMove(
      currentCor[0] + moves[moveIdx][0],
      currentCor[1] + moves[moveIdx][1]
    )
      ? moveIdx
      : moveIdx >= 3
      ? 0
      : moveIdx + 1;

    let [ny, nx] = [
      currentCor[0] + moves[moveIdx][0],
      currentCor[1] + moves[moveIdx][1],
    ];

    currentCor = [ny, nx];
  }

  const resultString = resultArr.map((v) => v.join(" ")).join("\n");

  console.log(resultString);
  console.log(targetCor[0] + 1, targetCor[1] + 1);
}

solution(["7", "35"]);
// solution(["5", "6"]);
