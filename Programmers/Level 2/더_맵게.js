class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  getMin() {
    return this.heap[0];
  }

  push(data) {
    this.heap.push(data);

    this.bubbleUp();
  }

  pop() {
    if (this.size() <= 0) return null;

    const returnVal = this.heap[0];

    this.heap[0] = this.heap[this.heap.length - 1];
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
        smallerKeyIdx =
          this.heap[leftIdx] < this.heap[rightIdx] ? leftIdx : rightIdx;
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

function solution(scovilles, K) {
  const minHeap = new MinHeap();

  scovilles.forEach((v) => minHeap.push(v));

  let minScoville = minHeap.getMin();
  let count = 0;

  while (minHeap.size() > 1 && minScoville < K) {
    minHeap.push(minHeap.pop() + minHeap.pop() * 2);

    minScoville = minHeap.getMin();
    count++;
  }

  if (minHeap.size() <= 1 && minScoville < K) return -1;

  return count;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
