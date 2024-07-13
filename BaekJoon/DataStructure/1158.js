const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(line.trim());
  process.exit();
});

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CicularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
    this.size = 0;
  }

  push(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.tail = this.head;
      this.current = this.head;
      this.head.next = this.head;
      this.size++;
      return;
    }
    this.tail.next = new Node(data);
    this.tail = this.tail.next;
    this.tail.next = this.head;
    this.size++;
  }

  popCurrent() {
    let returnVal;
    if (this.size === 1) {
      returnVal = this.current.data;
      this.head = null;
      this.tail = null;
      this.current = null;
      this.size = 0;
      return returnVal;
    }

    let prevNode = this.head;
    while (prevNode.next !== this.current) {
      prevNode = prevNode.next;
    }
    if (this.current === this.head) this.head = this.head.next;
    if (this.current === this.tail) this.tail = this.prevNode;

    prevNode.next = this.current.next;

    returnVal = this.current.data;
    this.current = this.current.next;
    this.size--;
    return returnVal;
  }

  moveCurrent(num) {
    for (let i = 0; i < num; i++) {
      this.current = this.current.next;
    }
  }

  traversal() {
    const linkedList = [];
    let n = this.head;
    while (n.data !== this.tail.data) {
      linkedList.push(n.data);
      n = n.next;
    }
    linkedList.push(n.data);
    console.log(linkedList);
  }
}

function solution(input) {
  const [numOfNumber, numOfJump] = [...input.trim().split(" ")];

  const result = [];
  const list = new CicularLinkedList();
  for (let i = 1; i <= numOfNumber; i++) {
    list.push(i);
  }
  const realJump = numOfJump - 1;
  while (list.size) {
    list.moveCurrent(realJump);
    result.push(list.popCurrent());
  }
  console.log("<" + result.join(', ') + ">");
}
