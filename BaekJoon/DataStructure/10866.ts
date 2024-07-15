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

//식별자로 사용될 랜덤 상수
const FRONT = 18564;
const BACK = 89156;

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

  push(data: number, option: number) {
    const newNode = new DNode(data);

    if (!this.front || !this.back) {
      this.front = newNode;
      this.back = newNode;
      this.size++;
      return newNode;
    }

    if (option === FRONT) {
      this.front.prev = newNode;
      newNode.next = this.front;
      this.front = newNode;
    } else if (option === BACK) {
      this.back.next = newNode;
      newNode.prev = this.back;
      this.back = newNode;
    }
    this.size++;
    return;
  }

  pop(option: number): number {
    if (!this.front || !this.back) return -1;

    const returnVal = this.front.data;

    if (this.back === this.front) {
      this.front = null;
      this.back = null;
      this.size = 0;
      return returnVal;
    }

    if (option === FRONT) {
      this.front = this.front.next;
      this.front!.prev = null;
    } else {
      this.back = this.back.prev;
      this.back!.next = null;
    }
    this.size--;
    return returnVal;
  }

  get(option: number) {
    return option === FRONT
      ? this.front !== null
        ? this.front.data
        : -1
      : this.back !== null
      ? this.back.data
      : -1;
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
    if (command === "push_front") deque.push(commandNum, FRONT);
    else if (command === "push_back") deque.push(commandNum, BACK);
    else if (command === "pop_front") answer.push(deque.pop(FRONT));
    else if (command === "pop_back") answer.push(deque.pop(BACK));
    else if (command === "size") answer.push(deque.getSize());
    else if (command === "empty") answer.push(deque.isEmpty());
    else if (command === "front") answer.push(deque.get(FRONT));
    else if (command === "back") answer.push(deque.get(BACK));
  }

  console.log(answer.join("\n"));
}
