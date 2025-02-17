function solution(n, weak, dist) {
  let answer = Infinity;
  const numOfDist = dist.length;
  dist = dist.sort((a, b) => a - b);

  (function _helper(weak, dist) {
    if (weak.length === 0) {
      answer = Math.min(answer, numOfDist - dist.length);
      return;
    }
    if (dist.length === 0) return;

    const distances = [...dist];
    const biggestDistance = distances.pop();

    let remainWeak = [];

    weak.forEach((w, i, arr) => {
      remainWeak = [...arr];
      remainWeak = remainWeak.filter((v) => {
        if (w + biggestDistance >= n) {
          return !(v >= w || v <= w + biggestDistance - n);
        } else {
          return !(v >= w && v <= w + biggestDistance);
        }
      });

      _helper(remainWeak, distances);
    });

  })(weak, dist);

  return answer === Infinity ? -1 : answer;
}

console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]));
console.log(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]));