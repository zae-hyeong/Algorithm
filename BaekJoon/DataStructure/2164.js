var readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(line.trim());
  process.exit();
});
var Data = /** @class */ (function () {
  function Data(data) {
    this.data = data;
    this.next = null;
  }
  return Data;
})();
var Queue = /** @class */ (function () {
  function Queue() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  Queue.prototype.push = function (data) {
    var newNode = new Data(data);
    if (!this.size) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    newNode.next = this.tail;
    this.tail = newNode;
    this.size++;
  };
  Queue.prototype.pop = function () {
    if (!this.head) return -1;
    var returnVal = this.head.data;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return returnVal;
    }
    var prevNode = this.tail;
    while (
      (prevNode === null || prevNode === void 0 ? void 0 : prevNode.next) !==
      this.head
    )
      prevNode = prevNode.next;
    this.head = prevNode;
    this.head.next = null;
    this.size--;
    return returnVal;
  };
  Queue.prototype.traversal = function () {
    if (!this.head) return;
    var currentNode = this.tail;
    var array = [];
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(array.join(", "));
  };
  return Queue;
})();
function solution(input) {
  var numOfCard = parseInt(input);
  var cards = new Queue();
  for (var i = 1; i < numOfCard + 1; i++) cards.push(i);
  while (cards.size > 1) {
    cards.pop();
    cards.push(cards.pop());
  }
  console.log(cards.pop());
}
