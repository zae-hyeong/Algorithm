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
      this.head.next = this.head;
      this.tail = this.head;
      this.current = this.head;
      this.size++;
      return;
    }
    this.tail.next = new Node(data);
    this.tail = this.tail.next;
    this.tail.next = this.head;
    this.size++;
  }

  popCurrent() {
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return this.current.data;
    }
    let prevNode = this.head;
    let data;
    while (prevNode.next.data !== this.current.data) {
      prevNode = prevNode.next;
    }
    prevNode.next = this.current.next;
    if (this.current.data === this.head.data) this.head = this.head.next;
    if (this.current.data === this.tail.data) this.tail = this.prevNode;
    data = this.current.data;
    this.current = this.current.next;
    this.size--;
    return data;
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
    console.log("RESULT ARRAY : " + result);
  }
  console.log("FINAL : " + result);
}
