function solution(board, moves) {
  let basket = [];

  for (let m of moves) {
    m -= 1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][m] !== 0) {
        basket.push(board[i][m]);
        board[i][m] = 0;
        break;
      }
    }
    // console.log(board);
  }

  let answer = 0;
  let isChange = true;

  while (isChange) {
    isChange = false;
    // console.log(basket);

    for (let i = 0; i < basket.length - 1; i++) {
      if (basket[i] === basket[i + 1]) {
        basket.splice(i, 2);
        isChange = true;
        answer += 2;
        i--;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  ) // 4 (사라진 개수)
);
