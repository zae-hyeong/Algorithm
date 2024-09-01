class Queue {
  constructor(arr) {
    this.arr = arr;
    this.front = 0;
    this.rear = arr.length;
  }

  push(data) {
    this.arr.push(data);
    this.rear++;
  }

  pop() {
    return this.arr[this.front++];
  }

  isEmpty() {
    return this.front === this.rear ? true : false;
  }
}

function solution(cards1, cards2, goal) {
  var answer = "";

  let w1 = cards1.shift();
  let w2 = cards2.shift();
  for (const w of goal) {
    if (w === w1) {
      w1 = cards1.shift();
    } else if (w === w2) {
      w2 = cards2.shift();
    } else return "No";
  }
  return "Yes";
}

function solution2(cards1, cards2, goal) {
  const c1 = new Queue(cards1);
  const c2 = new Queue(cards2);
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
