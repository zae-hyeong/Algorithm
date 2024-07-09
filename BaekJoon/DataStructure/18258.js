let givenInput = [];
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline
  .on("line", function (line) {
    givenInput.push(line.trim());
  })
  .on("close", function () {
    solution(givenInput);
    process.exit();
  });

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(num) {
    let n = new Node(num);
    if (this.size === 0) {
      this.head = n;
      this.tail = n;
      this.size++;
      return num;
    }
    n.next = this.head;
    this.head = n;
    this.size++;
    return num;
  }
  pop() {
    if (this.size === 0) return -1;
    
    let returnVal = this.head.data;
    this.head = this.head.next;
    this.size--;
    return returnVal;
  }
  empty() {
    return this.size === 0 ? 1 : 0;
  }
  front() {
    return this.size === 0 ? -1 : this.head.data;
  }
  back() {
    return this.size === 0 ? -1 : this.tail.data;
  }
}

function solution(inputLines) {
  const [numOfInput, ...input] = [...inputLines];

  const q = new Queue();

  let num;
  let command;
  for (let i = 0; i < numOfInput; i++) {
    [command, num] = input[i].trim().split(" "); 
    switch (command) {
      case "push":
        console.log(q.push(num));
        break;
      case "pop":
        console.log(q.pop());
        break;
      case "size":
        console.log(q.size);
        break;
      case "empty":
        console.log(q.empty());
        break;
      case "front":
        console.log(q.front());
        break;
      case "back":
        console.log(q.back());
        break;
      default:
        console.log("ERROR");
    }
  }
}
