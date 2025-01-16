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
function solution1(N) {
  function _fibonacci(N, beforeFib) {
    if (N <= 0) return 0;
    if (N === 1) return 1;

    return _fibonacci(N - 1) + _fibonacci(N - 2);
  }
  return _fibonacci(N);
}

function solution(N) {
  const fibonacci = [0, 1];
  function _fibonacci(N) {
    if (N < fibonacci.length) return fibonacci[N];

    const result = _fibonacci(N - 1) + _fibonacci(N - 2);
    fibonacci.push(result);
    return result;
  }
  return _fibonacci(N);
}