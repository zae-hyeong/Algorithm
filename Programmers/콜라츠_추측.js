function solution(num) {
  let n = num;

  let count = 0;

  while (n !== 1 || count <= 500) {
    n = n % 2 ? 3 * n + 1 : n / 2;
    count++;
  }

  return count === 1 ? count : -1;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
