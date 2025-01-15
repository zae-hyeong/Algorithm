class LimitedMinHeap {
  constructor(N) {
    this.heap = [];
    this.N = N;
  }

  size() {
    return this.heap.length;
  }

  getMin() {
    return this.heap[1];
  }

  push(data) {
    this.heap.push(data);

    this.bubbleUp();
    if (this.size() > this.N) this.pop();
  }

  pop() {
    if (this.size() <= 0) return null;

    const returnVal = this.heap[0];

    this.swap(0, this.heap.length - 1);
    this.heap.pop();

    this.bubbleDown();

    return returnVal;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  bubbleUp() {
    let i = this.heap.length - 1;

    while (i >= 0 && this.heap[i] < this.heap[this.parentIdx(i)]) {
      this.swap(i, this.parentIdx(i));

      i = this.parentIdx(i);
    }
  }

  bubbleDown() {
    let i = 0;

    while (
      this.heap[this.leftChildIdx(i)] < this.heap[i] ||
      this.heap[this.rightChildIdx(i)] < this.heap[i]
    ) {
      let leftIdx = this.leftChildIdx(i);
      let rightIdx = this.rightChildIdx(i);

      let smallerKeyIdx = -1;

      if (this.heap[rightIdx] !== undefined) {
        smallerKeyIdx = this.heap[leftIdx] < this.heap[rightIdx] ? leftIdx : rightIdx;
      } else {
        smallerKeyIdx = leftIdx;
      }

      this.swap(i, smallerKeyIdx);
      i = smallerKeyIdx;
    }
  }

  parentIdx(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChildIdx(i) {
    return 2 * i + 1;
  }

  rightChildIdx(i) {
    return 2 * i + 2;
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = -1;
let heap = null;

rl.on("line", function (line) {
  if (N === -1) {
    N = +line;
    heap = new LimitedMinHeap(N);
    return;
  }

  line
    .split(" ")
    .map((v) => +v)
    .forEach((v) => heap.push(v));

  console.log(heap);

}).on("close", function () {
  console.log(heap.pop());
  process.exit();
});

// solution([
//   "5",
//   "12 7 9 15 5",
//   "13 8 11 19 6",
//   "21 10 26 31 16",
//   "48 14 28 35 25",
//   "52 20 32 41 49",
// ]);

// console.log(process.memoryUsage());
