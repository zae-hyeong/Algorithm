class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(data) {
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
      smallerIdx =
        this.heap[leftIdx] < this.heap[rightIdx] ? leftIdx : rightIdx;

      this.swap(currentIdx, smallerIdx);

      currentIdx = smallerIdx;
      leftIdx = currentIdx * 2;
      rightIdx = currentIdx * 2 + 1;
    }

    return returnVal;
  }
}

const test = () => {
  const heap = new MinHeap();

  heap.push(3);
  heap.push(5);
  heap.push(4);
  heap.push(2);
  heap.push(1);
  heap.push(7);
  heap.push(0);

  console.log(heap.heap);

  heap.pop();

  console.log(heap.heap);
  heap.pop();
  console.log(heap.heap);
};

test();
