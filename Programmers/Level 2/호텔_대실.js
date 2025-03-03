class MinHeap {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
    this.arr.sort((a, b) => b - a);
  }

  pop = () => this.arr.pop();

  get = () => this.arr[this.arr.length - 1];

  isEmpty = () => this.arr.length === 0;

  size = () => this.arr.length;
}

const parseIntTime = (strTime) => {
  const [hour, min] = strTime.split(":").map((v) => +v);
  return hour * 100 + min;
};

// 시간 형식에 맞게 10분 더해주는 함수
const plus10Min = (time) => ((time + 10) % 100 >= 60 ? time + 50 : time + 10);

function solution(book_times) {
  book_times = book_times
    .map(([startTime, endTime]) => [
      parseIntTime(startTime),
      plus10Min(parseIntTime(endTime)),
    ])
    .sort((a, b) => a[0] - b[0]);

  const minHeap = new MinHeap();

  for (const [startTime, endTime] of book_times) {
    if (minHeap.isEmpty()) {
      minHeap.push(endTime);
      continue;
    }

    const minEndTime = minHeap.get();

    if (startTime >= minEndTime) minHeap.pop();

    minHeap.push(endTime);
  }

  return minHeap.size();
}

console.log(
  solution([
    ["14:10", "19:20"],

    ["14:20", "15:20"],
    ["16:40", "18:20"],

    ["15:00", "17:00"],
    ["18:20", "21:20"],
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
