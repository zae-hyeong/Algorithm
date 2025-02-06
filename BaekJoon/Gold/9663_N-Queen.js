const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(Number(line.trim()));
  process.exit();
});

/**
 * @param {string} input
 */
function solution(N) {
  let count = 0;

  (function _helper(queens, width, leftDiagonal, rightDiagonal) {
    if (queens.length === N) {
      // console.log(queens);
      count++;
      return;

    }

    const y = queens.length;

    for (let x = 0; x < N; x++) {
      if(width[x] || leftDiagonal[x - y + N] || rightDiagonal[x + y]) continue;

      width[x] = leftDiagonal[x - y + N] = rightDiagonal[x + y] = true;
      _helper([...queens, x], width, leftDiagonal, rightDiagonal);
      width[x] = leftDiagonal[x - y + N] = rightDiagonal[x + y] = false;
    }

  })([], Array(N).fill(false), Array(N * 2).fill(false), Array(N * 2).fill(false));

  console.log(count);
}


// console.log(solution(1)); // 1
// console.log(solution(2)); // 0
console.log(solution(4)); // 2
// console.log(solution(8)); // 92
