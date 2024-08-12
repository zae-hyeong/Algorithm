function solution(arr1, arr2) {
  const [rowLength1, colLength1] = [arr1.length, arr1[0].length];
  const [rowLength2, colLength2] = [arr2.length, arr2[0].length];

  var answer = new Array(rowLength1);
  for (let i = 0; i < rowLength1; i++) {
    answer[i] = new Array(colLength2).fill(0);
  }

  for (let i = 0; i < rowLength1; i++)
    for (let j = 0; j < colLength2; j++)
      for (let k = 0; k < colLength1; k++)
        answer[i][j] += arr1[i][k] * arr2[k][j];

  return answer;
}

const solution2 = (arr1, arr2) =>
  arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );

const solution3 = (arr1, arr2) => 
  arr1.map(
    (row) => row.map(
      (_, i) => row.reduce(
        (sum, cell, j) => sum + cell * arr2[j][i])
      )
  );

const test = () => {
  console.log(
    solution(
      [
        [1, 4],
        [3, 2],
        [4, 1],
      ],
      [
        [3, 3],
        [3, 3],
      ]
    )
  );
  console.log(
    solution(
      [
        [2, 3, 2],
        [4, 2, 4],
        [3, 1, 4],
      ],
      [
        [5, 4, 3],
        [2, 4, 1],
        [3, 1, 1],
      ]
    )
  );
};

test();
