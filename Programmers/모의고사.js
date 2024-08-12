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
    if (maxMatch === testTakerAnswer[i]) answer.push(i + 1);
  }

  return answer;
}

function solution2(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) scores[j] += 1;
    }
  }

  const maxScore = Math.max(...scores);

  const highestScores = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) highestScores.push(i + 1);
  }
}
