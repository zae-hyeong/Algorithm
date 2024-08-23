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
  }

  let answer = 0;
  let isChange = true;

  while(isChange){
    isChange = false;

    for (let i = 0 ; i< basket.length - 1; i++) {
      if (basket[i] === basket[i+1]) {
        basket.splice(i, 2);
        isChange = true;
        answer += 2;
        i--;
      }
    }

  }

  return answer;
}
