let givenInput: string[] = [];
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline
  .on("line", function (line: string) {
    givenInput.push(line.trim());
  })
  .on("close", function () {
    solution(givenInput);
    process.exit();
  });

class DNode {
  data: number;
  next: DNode | null;
  prev: DNode | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  front: DNode | null;
  back: DNode | null;
  size: number;
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  pushFront(data: number) {
    const newNode = new DNode(data);

    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
      this.size++;
      return newNode;
    }

    this.front.prev = newNode;
    newNode.next = this.front;
    this.front = newNode;
    this.size++;
    return newNode;
  }

  pushBack(data: number) {
    const newNode = new DNode(data);
    if (!this.back) {
      this.front = newNode;
      this.back = newNode;
      this.size++;
      return;
    }

    this.back.next = newNode;
    newNode.prev = this.back;
    this.back = newNode;
    this.size++;
    return;
  }

  popFront() {
    if (!this.front) return -1;

    const returnVal = this.front.data;

    if (this.back === this.front) {
      this.front = null;
      this.back = null;
      this.size = 0;
      return returnVal;
    }

    this.front = this.front.next;
    this.front!.prev = null;
    this.size--;
    return returnVal;
  }

  popBack() {
    if (!this.back) return -1;

    const returnVal = this.back.data;

    if (this.back === this.front) {
      this.front = null;
      this.back = null;
      this.size = 0;
      return returnVal;
    }

    this.back = this.back.prev;
    this.back!.next = null;
    this.size--;
    return returnVal;
  }

  getFront() {
    return this.front !== null ? this.front.data : -1;
  }

  getBack() {
    return this.back !== null ? this.back.data : -1;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size ? 0 : 1;
  }
}

function solution(inputLines: string[]) {
  const [numOfInput, ...input] = [...inputLines];

  const deque = new Deque();

  let command: string;
  let commandNum: number;
  let stringNum: string;

  const numOfCommand = parseInt(numOfInput);
  const answer: number[] = [];

  for (let i = 0; i < numOfCommand; i++) {
    [command, stringNum] = [...input[i].trim().split(" ")];
    commandNum = parseInt(stringNum);
    if (command === "push_front") deque.pushFront(commandNum);
    else if (command === "push_back") deque.pushBack(commandNum);
    else if (command === "pop_front") answer.push(deque.popFront());
    else if (command === "pop_back") answer.push(deque.popBack());
    else if (command === "size") answer.push(deque.getSize());
    else if (command === "empty") answer.push(deque.isEmpty());
    else if (command === "front") answer.push(deque.getFront());
    else if (command === "back") answer.push(deque.getBack());
  }

  console.log(answer.join("\n"));
}
