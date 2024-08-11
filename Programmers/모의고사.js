function solution(answers) {
  const testTaker = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const testTakerAnswer = [];

  for (let i = 0; i < 3; i++) {
    testTakerAnswer.push(
      answers.filter(
        (value, index) => value === testTaker[i][index % testTaker[i].length]
      ).length
    );
  }

  let answer = [];
  const maxMatch = Math.max(...testTakerAnswer);

  for (let i = 0; i < 3; i++) {
    if ( maxMatch === testTakerAnswer[i] ) answer.push(i + 1);
  }

  return answer;
}
