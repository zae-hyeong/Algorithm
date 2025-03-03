class MinHeap {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
    this.arr.sort((a, b) => b[1] - a[1]);
  }

  get() {
    return this.arr[this.arr.length - 1];
  }

  pop() {
    return this.arr.pop();
  }

  isEmpty = () => this.arr.length === 0;
}

const parseIntTime = (strTime) => {
  const [hour, min] = strTime.split(":").map((v) => +v);
  return hour * 100 + min;
};

const plus10Min = (time) => ((time + 10) % 100 >= 60 ? time + 50 : time + 10);

function solution(book_times) {
  book_times = book_times
    .map(([startTime, endTime]) => [
      parseIntTime(startTime),
      plus10Min(parseIntTime(endTime)),
    ])
    .sort((a, b) => a[0] - b[0]);

  const minHeap = new MinHeap();

  const rooms = [];

  for (const [startTime, endTime] of book_times) {
    if (minHeap.isEmpty()) {
      minHeap.push([rooms.length, endTime]);
      rooms[rooms.length] = endTime;
      continue;
    }

    const [roomIdx, minEndTime] = minHeap.get();

    if (startTime < minEndTime) {
      minHeap.push([rooms.length, endTime]);
      rooms[rooms.length] = endTime;
      continue;
    }

    rooms[roomIdx] = endTime;
    minHeap.pop();
  }

  return rooms.length;
}

console.log(
  solution([
    ["9:00", "10:00"],    ["10:00", "11:20"],       ["14:10", "19:20"],

    ["14:20", "15:20"],     ["22:30", "23:20"],


  ])
);
// console.log(
//   solution([
//     ["09:10", "10:10"],
//     ["10:20", "12:20"],
//   ])
// );

// console.log(
//   solution([
//     ["10:20", "12:30"],
//     ["10:20", "12:30"],
//     ["10:20", "12:30"],
//   ])
// );
