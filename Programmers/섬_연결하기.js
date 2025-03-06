class MySet {
  constructor(n) {
    this.set = Array.from({ length: n }, (_, i) => i);
  }

  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);

    this.set[rootB] = rootA;
  }

  find(x) {
    return (function _find(parents, x) {
      if (parents[x] === x) return x;

      parents[x] = _find(parents, parents[x]); // 경로 압축
      return parents[x];
    })(this.set, x);
  }
}

function solution(n, costs) {
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);

  let totalCost = 0;

  const set = new MySet(n);

  sortedCosts.forEach((v) => {
    if (set.find(v[0]) !== set.find(v[1])) {
      set.union(v[0], v[1]);
      totalCost += v[2];
    }
  });

  return totalCost;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
