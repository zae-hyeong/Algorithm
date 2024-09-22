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

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(data, N) {
    if (this.heap.length > N && data < this.getMin()) return;
    if (this.heap.length > N) this.pop();

    this.heap.push(data);

    let index = this.heap.length - 1;
    let parentIndex = Math.trunc(index / 2);

    while (this.heap[parentIndex] > data) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.trunc(index / 2);
    }
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  size() {
    return this.heap.length - 1;
  }

  pop() {
    const returnVal = this.heap[1];

    let lastVal = this.heap.pop();
    this.heap[1] = lastVal;

    let currentIdx = 1;
    let leftIdx = currentIdx * 2;
    let rightIdx = currentIdx * 2 + 1;
    let smallerIdx = -1;

    while (
      (this.heap[leftIdx] && this.heap[currentIdx] > this.heap[leftIdx]) ||
      (this.heap[rightIdx] && this.heap[currentIdx] > this.heap[rightIdx])
    ) {
      if (this.heap[leftIdx] === undefined) smallerIdx = rightIdx;
      else if (this.heap[rightIdx] === undefined) smallerIdx = leftIdx;
      else
        smallerIdx =
          this.heap[leftIdx] < this.heap[rightIdx] ? leftIdx : rightIdx;

      this.swap(currentIdx, smallerIdx);

      currentIdx = smallerIdx;
      leftIdx = currentIdx * 2;
      rightIdx = currentIdx * 2 + 1;
    }

    return returnVal;
  }

  getMin() {
    return this.heap[1];
  }
}

function solution(input) {
  const N = parseInt(input[0]);
  const [, ...numsStrings] = [...input];

  const heap = new MinHeap();

  let tmpArr = [];
  for (let i = 0; i < N; i++) {
    tmpArr = numsStrings[i]
      .trim()
      .split(" ")
      .map((num) => parseInt(num))
      .map((num) => heap.push(num, N));
  }
  console.log(heap.getMin());
}
