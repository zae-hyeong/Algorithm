function solution(N) {
  let usedBattery = 0;

  while (N !== 0) {
    if (N % 2 === 0) {
      N = N / 2;
    } else {
      N -= 1;
      usedBattery++;
    }
  }

  return usedBattery;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
console.log(solution(256));