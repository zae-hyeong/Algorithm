const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(line.trim());
  process.exit();
});

function solution(input) {
  const N = +input;

  let nums = Array.from({ length: N }, (_, i) => i + 1);

  let startPoint = 0;
  for (i = 1; i < N; i++) {
    let dropoutIndex = (startPoint + (i ** 3 - 1)) % nums.length;
    nums.splice(dropoutIndex, 1);

    startPoint = dropoutIndex % nums.length;
  }

  console.log(nums.pop());
}

console.log(solution(3));
console.log(solution(6));
console.log(solution(10));
console.log(solution(5000));
