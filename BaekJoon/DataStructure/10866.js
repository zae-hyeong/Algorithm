var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var givenInput = [];
var readline = require("readline").createInterface({
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
var DNode = /** @class */ (function () {
    function DNode(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    return DNode;
}());
var Deque = /** @class */ (function () {
    function Deque() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }
    Deque.prototype.pushFront = function (data) {
        var newNode = new DNode(data);
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
    };
    Deque.prototype.pushBack = function (data) {
        var newNode = new DNode(data);
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
    };
    Deque.prototype.popFront = function () {
        if (!this.front)
            return -1;
        var returnVal = this.front.data;
        if (this.back === this.front) {
            this.front = null;
            this.back = null;
            this.size = 0;
            return returnVal;
        }
        this.front = this.front.next;
        this.front.prev = null;
        this.size--;
        return returnVal;
    };
    Deque.prototype.popBack = function () {
        if (!this.back)
            return -1;
        var returnVal = this.back.data;
        if (this.back === this.front) {
            this.front = null;
            this.back = null;
            this.size = 0;
            return returnVal;
        }
        this.back = this.back.prev;
        this.back.next = null;
        this.size--;
        return returnVal;
    };
    Deque.prototype.getFront = function () {
        return this.front !== null ? this.front.data : -1;
    };
    Deque.prototype.getBack = function () {
        return this.back !== null ? this.back.data : -1;
    };
    Deque.prototype.getSize = function () {
        return this.size;
    };
    Deque.prototype.isEmpty = function () {
        return this.size ? 0 : 1;
    };
    return Deque;
}());
function solution(inputLines) {
    var _a;
    var _b = __spreadArray([], inputLines, true), numOfInput = _b[0], input = _b.slice(1);
    var deque = new Deque();
    var command;
    var commandNum;
    var stringNum;
    var numOfCommand = parseInt(numOfInput);
    for (var i = 0; i < numOfCommand; i++) {
        _a = __spreadArray([], input[i].trim().split(" "), true), command = _a[0], stringNum = _a[1];
        commandNum = parseInt(stringNum);
        if (command === "push_front")
            deque.pushFront(commandNum);
        else if (command === "push_back")
            deque.pushBack(commandNum);
        else if (command === "pop_front")
            console.log(deque.popFront());
        else if (command === "pop_back")
            console.log(deque.popBack());
        else if (command === "size")
            console.log(deque.getSize());
        else if (command === "empty")
            console.log(deque.isEmpty());
        else if (command === "front")
            console.log(deque.getFront());
        else if (command === "back")
            console.log(deque.getBack());
    }
}
