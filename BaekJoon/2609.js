const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(line.trim());
  process.exit();
});

function getGreatestCommonDivisor(N, M) {
  const minNum = Math.min(N, M);

  let greatestCommonDivisor = 1;

  for (let i = 2; i <= minNum; i++) {
    if (!(N % i) && !(M % i)) greatestCommonDivisor = i;
  }

  return greatestCommonDivisor;
}

function getLeastCommonMultiple(N, M) {
  const smallNum = Math.min(N, M);
  const bigNum = Math.max(N, M);

  for (let i = 1; i <= bigNum; i++) {
    if (!((smallNum * i) % bigNum)) return smallNum * i;
  }
}

function solution(input) {
  let [a, b] = input.split(" ");
  const [N, M] = [Number(a), Number(b)];

  console.log(getGreatestCommonDivisor(N, M)+'\n'+getLeastCommonMultiple(N, M));
}
