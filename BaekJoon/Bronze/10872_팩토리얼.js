const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  console.log(solution(Number(line.trim())));
  process.exit();
});

/**
 * @param {string} input
 */
function solution(N) {
  if (N <= 1) return 1;
  return N * solution(N - 1);
}
