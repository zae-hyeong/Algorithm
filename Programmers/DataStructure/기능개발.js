function solution(progresses, speeds) {
  const answer = [];

  const costDates = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  let dayPassed = costDates[0];
  let count = 0;

  for (let i = 0; i < costDates.length; i++) {
    if (costDates[i] <= dayPassed) {
      count++;
    } else {
      dayPassed = Math.max(dayPassed, costDates[i]);
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //[1, 3, 2]
