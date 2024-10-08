const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(line.trim());
  process.exit();
});

interface NodeI {
  data: number;
  next: NodeI | null;
  prev: NodeI | null;
}

class Data implements NodeI {
  data: number;
  next: NodeI | null;
  prev: NodeI | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  head: NodeI | null;
  tail: NodeI | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data: number) {
    const newNode = new Data(data);
    if (this.tail) {
      this.tail.prev = newNode;
      newNode.next = this.tail;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  pop() {
    if (!this.head) return -1;

    const returnVal = this.head!.data;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return returnVal;
    }

    this.head = this.head.prev;
    this.head!.next = null;
    this.size--;
    return returnVal;
  }

  traversal() {
    if (!this.head) return;
    let currentNode = this.tail;
    let array: number[] = [];

    while (currentNode !== null) {
      array.push(currentNode!.data);
      currentNode = currentNode.next;
    }
    console.log(array.join(', '));
  }
}

function solution(input: string) {
  const numOfCard = parseInt(input);

  const cards = new Queue();
  for (let i = 1; i < numOfCard + 1; i++)
    cards.push(i);
  
  while (cards.size > 1) {
    cards.pop();
    cards.push(cards.pop());
  }

  console.log(cards.pop());
}
