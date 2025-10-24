/**
 * data: ReservationRequest
 */
export default class MinHeap {
  constructor() {
    this.arr = [null];
  }

  push(data) {
    this.arr.push(data);

    this.bubbleUp();
  }

  pop() {
    if(this.arr.length <= 1) return null;
    
    this.swap(1, this.arr.length - 1);
    const returnVal = this.arr.pop();
    this.bubbleDown();
    return returnVal;
  }

  peek() {
    return this.arr[1];
  }

  isEmpty() {
    return !(this.arr.length > 1);
  }

  bubbleDown() {
    let parent = 1;
    let next, left, right;
    const N = this.arr.length - 1;

    while (true) {
      next = parent;
      left = parent * 2;
      right = parent * 2 + 1;

      if (
        left <= N &&
        this.arr[next].requestOverDate > this.arr[left].requestOverDate
      ) {
        next = left;
      }

      if (
        right <= N &&
        this.arr[next].requestOverDate > this.arr[right].requestOverDate
      ) {
        next = right;
      }

      if (next === parent) break;
      this.swap(parent, next);
      parent = next;
    }
  }

  bubbleUp() {
    let child = this.arr.length - 1;
    let parent = Math.floor(child / 2);

    while (
      parent > 0 &&
      this.arr[parent].requestOverDate > this.arr[child].requestOverDate
    ) {
      this.swap(parent, child);
      child = parent;
      parent = Math.floor(child / 2);
    }
  }

  swap(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }
}
