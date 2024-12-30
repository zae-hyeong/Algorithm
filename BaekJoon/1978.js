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

function isPrime(N) {
  if (N === 1) return false;

  for (let i = 2; i < N; i++) {
    if (!(N % i)) return false;
  }
  return true;
}

function solution(inputLines) {
  const [, secondLine] = inputLines;
  const nums = secondLine.split(" ").map((v) => Number(v));

  console.log(nums.filter((n) => isPrime(n)).length);
}
