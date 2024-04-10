function solution(lottos, win_nums) {
  let highest = 0;
  let lowest = 0;

  const lottosNumbers = lottos.filter((num) => num !== 0);

  let numOfMatchedNumbers = lottos.filter(
    (num) => win_nums.indexOf(num) !== -1
  ).length;
  let numOfZero = win_nums.length - lottosNumbers.length;

  highest =
    numOfMatchedNumbers + numOfZero ? 7 - (numOfMatchedNumbers + numOfZero) : 6;
  lowest = numOfMatchedNumbers ? 7 - numOfMatchedNumbers : 6;

  return [highest, lowest];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
