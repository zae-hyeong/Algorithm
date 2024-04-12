function solution(num) {
  let n = num;

  let count = 0;

  while (n !== 1) {

    console.log(n);

    if (n % 2) n = 3 * n + 1;
    else n = n / 2;

    count++;

    if (count > 500) return -1;
  }

  return count;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
