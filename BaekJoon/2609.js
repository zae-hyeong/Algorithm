const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(line.trim());
  process.exit();
});

/* 구 버전 */

function getGreatestCommonDivisor(N, M) {
  let greatestCommonDivisor = 1;

  for (let i = 2; i <= M; i++) {
    if (!(N % i) && !(M % i)) greatestCommonDivisor = i;
  }

  return greatestCommonDivisor;
}

function getLeastCommonMultiple(N, M) {
  for (let i = 1; i <= N; i++) {
    if (!((M * i) % N)) return M * i;
  }
}

/* 유클리드 호제법 사용 */

function getGCD(N, M) {
  if (M === 0) return N;
  return getGCD(M, N % M);
}

function getLCM(N, M) {
  return (N * M) / getGCD(N, M);
}

function solution(input) {
  let [a, b] = input.split(" ");

  const [N, M] = [
    Math.max(Number(a), Number(b)),
    Math.min(Number(a), Number(b)),
  ];

  console.log(getGCD(N, M) + "\n" + getLCM(N, M));
}
