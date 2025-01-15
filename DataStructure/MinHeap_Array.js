class MinHeap {
  constructor() {
    this.heap = [];
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

const test = () => {
  const heap = new MinHeap();

  heap.push(-3);
  heap.push(5);
  heap.push(4);
  heap.push(2);
  heap.push(-1);
  heap.push(7);
  heap.push(0);

  console.log(heap.heap);
  console.log("POP::", heap.pop(), "----------------------------------");
  console.log(heap.heap);
  console.log("POP::", heap.pop(), "----------------------------------");
  console.log(heap.heap);
  console.log("POP::", heap.pop(), "----------------------------------");
  console.log(heap.heap);
  console.log("POP::", heap.pop(), "----------------------------------");
  console.log(heap.heap);
  console.log("POP::", heap.pop(), "----------------------------------");
  console.log(heap.heap);
  console.log("POP::", heap.pop(), "----------------------------------");
  console.log(heap.heap);
  console.log("POP::", heap.pop(), "----------------------------------");
  console.log("POP::", heap.pop(), "----------------------------------");
};

test();
