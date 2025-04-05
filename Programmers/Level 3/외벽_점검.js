function makePermutation(dist) {
  const permutation = [];

  (function _helper(dist, perm) {
    if (dist.length === 0) {
      permutation.push(perm);
      return;
    }

    dist.forEach((fixed, i, arr) => {
      const copyDist = [...arr];
      copyDist.splice(i, 1);
      _helper(copyDist, [...perm, fixed]);
    });
  })(dist, []);

  return permutation;
}

function isInRange(n, startPoint, width, weakPoint) {
  if (weakPoint >= startPoint && weakPoint <= startPoint + width) return true;
  if (weakPoint + n >= startPoint && weakPoint + n <= startPoint + width)
    return true;

  return false;
}

function solution(n, weak, dists) {
  const answer = [];

  for (const perm of makePermutation(dists)) {
    (function _helper(dist, weak) {
      if (weak.length === 0) {
        answer.push(dists.length - dist.length);
        return;
      }
      if (dist.length === 0) return;

      const copyDist = [...dist];
      const width = copyDist.pop();

      weak.forEach(weakPoint => {
        _helper(copyDist, [...weak].filter(w => !isInRange(n, weakPoint, width, w)));
      })
    })(perm, weak);
  }

  return answer.length === 0 ? -1 : Math.min(...answer);
}

console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]));
console.log(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]));
