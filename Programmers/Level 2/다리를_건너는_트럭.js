class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  push(data) {
    this.arr.push(data);
    this.tail++;
  }

  pop() {
    const returnVal = this.arr[this.head++];
    return returnVal;
  }

  getHead() {
    return this.arr[this.head];
  }

  isEmpty() {
    return this.head === this.tail;
  }

  isNotEmpty() {
    return this.head !== this.tail;
  }
}

function solution(bridgeLength, weight, weightsOfTruck) {
  
  const queue = new Queue();

  const beforeTruckQueue = new Queue();
  weightsOfTruck.forEach(v => beforeTruckQueue.push(v));

  const weightOfFirstTruck = beforeTruckQueue.pop();
  queue.push([weightOfFirstTruck, 0]); //[트럭무게, 트럭이 머문 시간];
  let totalWeightOfTrucks = weightOfFirstTruck;

  while(queue.isNotEmpty()) {
    queue.arr.forEach(v => v[1]++);
    
    if(queue.getHead()[1] >= bridgeLength) {
      const [leftedTruckWeight, ] = queue.pop();
      totalWeightOfTrucks -= leftedTruckWeight;
    }

    if (totalWeightOfTrucks + beforeTruckQueue.getHead() <= weight) {
      const weightOfNewTruck = beforeTruckQueue.pop();
      queue.push([weightOfNewTruck, 0]);
      totalWeightOfTrucks += weightOfNewTruck;
    }
  }

  return queue.arr[0][1] + 1;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]));