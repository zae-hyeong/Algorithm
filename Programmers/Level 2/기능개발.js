function solution2(progresses, speeds) {
  const requireDays = progresses.map((_, i) =>
    Math.ceil((100 - progresses[i]) / speeds[i])
  );

  let day = requireDays[0];
  let count = 0;

  const result = [];

  requireDays.forEach((v) => {
    if (v <= day) {
      count++;
    } else {
      day = v;
      result.push(count);
      count = 1;
    }
  });
  result.push(count);

  return result;
}

/* 조금 더 클린코드한 버전 */
function solution(progresses, speeds) {
  const requireDays = progresses.map((_, i) =>
    Math.ceil((100 - progresses[i]) / speeds[i])
  );

  let day = requireDays[0];
  const result = [0];

  for (let i = 0, j = 0; i < requireDays.length; i++) {
    if (requireDays[i] <= day) {
      result[j] += 1;
    } else {
      day = requireDays[i];
      result[++j] = 1;
    }
  }

  return result;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
