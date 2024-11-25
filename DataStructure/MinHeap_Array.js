class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  push(data) {
    this.heap.push(data);

    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;

    const min = this.heap[1];
    this.heap[1] = this.heap[this.size()];
    this.heap.pop();

    this.bubbleDown();

    return min;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  bubbleUp() {
    let currentIdx = this.size();

    while (currentIdx > 0) {
      const parentIdx = Math.floor(currentIdx / 2);
      if (this.heap[currentIdx] < this.heap[parentIdx])
        this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
    }
  }

  bubbleDown() {
    let currentIdx = 1;

    while (currentIdx * 2 < this.size()) {
      let leftIdx = currentIdx * 2;
      let rightIdx = currentIdx * 2 + 1;

      const smallerIdx =
        this.heap[leftIdx] < this.heap[rightIdx] ? leftIdx : rightIdx;

      this.swap(currentIdx, smallerIdx);
      currentIdx = smallerIdx;
    }
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
  console.log('POP::', heap.pop(), '----------------------------------');
  console.log(heap.heap);
  console.log('POP::', heap.pop(), '----------------------------------');
  console.log(heap.heap);
  console.log('POP::', heap.pop(), '----------------------------------');
  console.log(heap.heap);
  console.log('POP::', heap.pop(), '----------------------------------');
  console.log(heap.heap);
  console.log('POP::', heap.pop(), '----------------------------------');
  console.log('POP::', heap.pop(), '----------------------------------');
  console.log('POP::', heap.pop(), '----------------------------------');
  console.log('POP::', heap.pop(), '----------------------------------');
};

test();
