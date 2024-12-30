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

function getGCD(N, M) {
  const [A, B] = [Math.max(N, M), Math.min(N, M)];
  if(B===0) return A;
  else return getGCD(B, A % B);
}

function solution(inputLines) {
  const [firstLine, secondLine] = inputLines;
  const [N, S] = firstLine.split(" ").map((v) => Number(v));
  const nums = secondLine.split(" ").map((v) => Number(v));

  nums.push(S);
  nums.sort((a, b) => a - b);

  let prevLocation = nums[0];
  let currentGCD = nums[1] - nums[0];
  nums.forEach((v) => {
    currentGCD = getGCD(v - prevLocation, currentGCD);
    prevLocation = v;
  });

  console.log(currentGCD);
}
