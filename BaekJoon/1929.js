const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(line.trim());
  process.exit();
});

/* 느린 방법 

function isPrime(N) {
  if (N === 1) return false;

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (!(N % i)) return false;
  }
  return true;
}

function solution(input) {
  const [M, N] = input.split(' ').map((v) => Number(v));
  
  console.log(Array.from({length: N - M + 1}, (_, i) => M + i).filter(v => isPrime(v)).join('\n'));
}

*/

/* 메모리 초과

function solution(input) {
  const [M, N] = input.split(" ").map((v) => Number(v));

  let nums = Array.from({ length: N - 1 }, (_, i) => i + 2);
  nums = nums.reverse();

  const primes = [];

  while(nums.length) {
    const prime = nums.pop();

    primes.push(prime);
    nums = nums.filter(v => v % prime);
  }

  console.log(primes.filter((v) => v >= M && v <= N));
}

*/

function solution(input) {
  const [M, N] = input.split(" ").map((v) => Number(v));

  const notPrimes = {1: true};

  for( let i = 2; i <= Math.sqrt(N); i++) {
    if (notPrimes[i]) continue;

    // j가 i*2부터 지우는게 아니라 i ** 2부터 지우는 이유는
    // 어차피 i* n 까지는 이후로 진행하면서 다 지워지기 때문임.
    for (let j = i ** 2; j <= N; j += i) {
      notPrimes[j] = true;
    }
  }

  const print = [];
  for (let i = M; i <= N; i++) {
    if (!notPrimes[i]) print.push(i);
  }
  console.log(print.join('\n'));
}
