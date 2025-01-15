class MaxHeap {
  constructor(inputArr) {
    this.arr = [...inputArr].sort((a, b) => a - b);
  }

  popMax() {
    return this.arr.pop();
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}

class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  isEmpty() {
    return this.head === this.tail;
  }

  push(data) {
    this.arr.push(data);
    this.tail++;
  }

  pop() {
    const returnVal = this.arr[this.head++];
    return returnVal;
  }

  size() {
    return this.tail - this.head;
  }
}

/**
 *
 * @param {Array} priorities
 * @param {Number} location
 */
function solution(priorities, location) {
  
  const maxHeap = new MaxHeap(priorities);
  const queue = new Queue();

  priorities.forEach((v, i) => {
    queue.push(i);
  });

  let maxPriotiry = maxHeap.popMax();

  while(!queue.isEmpty()) {
    const priorityIndex = queue.pop();
    const priority = priorities[priorityIndex];

    if(priority === maxPriotiry) {
      if(priorityIndex === location) return priorities.length - queue.size();
      
      maxPriotiry = maxHeap.popMax();
    } else {
      queue.push(priorityIndex);
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
