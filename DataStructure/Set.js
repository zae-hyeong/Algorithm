class MySet {
  constructor(k) {
    this.arr = Array.from({ length: k }, (_, i) => i);
  }

  union(x, y) {
    const rootA = this.find(x);
    const rootB = this.find(y);

    this.arr[rootB] = rootA;
  }

  find(x) {
    return (function _find(parents, x) {
      if (parents[x] === x) return x;

      parents[x] = _find(parents, parents[x]); // 경로 압축
      return parents[x];
    })(this.arr, x);
  }

  getNumOfSet() {
    return new Set(this.arr).size;
  }

  getSet() {
    return this.arr;
  }
}

function test(k, operations) {
  const set = new MySet(k);

  for (const [op, val1, val2] of operations) {
    if (op === "u") {
      set.union(val1, val2);
    } else if (op === "f") {
      set.find(val1);
    }
  }

  return set.getNumOfSet();
}

console.log(
  test(3, [
    ["u", 0, 1],
    ["u", 1, 2],
    ["f", 2],
  ])
); //1
console.log(
  test(4, [
    ["u", 0, 1],
    ["u", 2, 3],
    ["f", 3],
  ])
); //2
