function solution(progresses, speeds) {
  const answer = [];

  const costDates = new Array(progresses.length);

  for (let i = 0; i < progresses.length; i++) {
    costDates[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
  }

  let dayPassed = 0;
  let count = 0;

  while (costDates.length) {
    dayPassed = Math.max(dayPassed, costDates.shift());
    count = 1;

    while (costDates[0] <= dayPassed) {
      costDates.shift();
      count++;
    }

    answer.push(count);
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //[1, 3, 2]
