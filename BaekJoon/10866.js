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
//식별자로 사용될 랜덤 상수
var FRONT = 18564;
var BACK = 89156;
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
    Deque.prototype.push = function (data, option) {
        var newNode = new DNode(data);
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
        }
        else if (option === BACK) {
            this.back.next = newNode;
            newNode.prev = this.back;
            this.back = newNode;
        }
        this.size++;
        return;
    };
    Deque.prototype.pop = function (option) {
        if (!this.front || !this.back)
            return -1;
        var returnVal = this.front.data;
        if (this.back === this.front) {
            this.front = null;
            this.back = null;
            this.size = 0;
            return returnVal;
        }
        if (option === FRONT) {
            this.front = this.front.next;
            this.front.prev = null;
        }
        else if (option === BACK) {
            this.back = this.back.prev;
            this.back.next = null;
        }
        this.size--;
        return returnVal;
    };
    Deque.prototype.get = function (option) {
        return option === FRONT
            ? this.front !== null
                ? this.front.data
                : -1
            : this.back !== null
                ? this.back.data
                : -1;
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
    var answer = [];
    for (var i = 0; i < numOfCommand; i++) {
        _a = __spreadArray([], input[i].trim().split(" "), true), command = _a[0], stringNum = _a[1];
        commandNum = parseInt(stringNum);
        if (command === "push_front")
            deque.push(commandNum, FRONT);
        else if (command === "push_back")
            deque.push(commandNum, BACK);
        else if (command === "pop_front")
            answer.push(deque.pop(FRONT));
        else if (command === "pop_back")
            answer.push(deque.pop(BACK));
        else if (command === "size")
            answer.push(deque.getSize());
        else if (command === "empty")
            answer.push(deque.isEmpty());
        else if (command === "front")
            answer.push(deque.get(FRONT));
        else if (command === "back")
            answer.push(deque.get(BACK));
    }
    console.log(answer.join("\n"));
}
