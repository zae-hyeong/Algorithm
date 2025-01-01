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

function solution(inputLines) {
  const [, ...nums] = inputLines.map((v) => +v);

  const biggestNum = Math.max(...nums);

  const primes = {};
  const notPrimes = {};

  for (let i = 2; i <= Math.sqrt(biggestNum); i++) {
    if (notPrimes[i]) continue;

    for (let j = i ** 2; j <= biggestNum; j += i) {
      notPrimes[j] = true;
    }
  }

  for (let i = 2; i <= biggestNum; i++) {
    if (!notPrimes[i]) primes[i] = true;
  }

  const result = [];
  
  nums.forEach((v) => {
    let count = 0;
    for (let i = 2; i <= v / 2; i++) {
      if (primes[i] && primes[v - i]) {
        count++;
      }
    }
    result.push(count);
  });

  console.log(result.join('\n'));
}
