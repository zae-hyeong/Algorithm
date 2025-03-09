function getDivisor(num) {
  const divisors = [];

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) divisors.push([num / i, i]);
  }

  return divisors;
}

function solution(brown, yellow) {
  const divisorBY = getDivisor(brown + yellow);
  const divisorY = getDivisor(yellow);

  for (const [M, N] of divisorBY) {
    for (const [a, b] of divisorY) {
      if (a + 2 <= M && b + 2 <= N) return [M, N];
    }
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
