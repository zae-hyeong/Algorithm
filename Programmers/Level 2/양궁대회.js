function solution(N, info) {
  let answer = [];
  let arrows = Array(11).fill(0);

  let pointGap = -Infinity;

  (function _helper(idx, reaminArrows, myPoint, rivalPoint) {
    // console.log(idx, reaminArrows, myPoint, rivalPoint, " / ", pointGap);

    if (idx === 10) {
      if (myPoint > rivalPoint && myPoint - rivalPoint >= pointGap) {
        pointGap = myPoint - rivalPoint;
        arrows[idx] += reaminArrows;
        answer = [...arrows];
        arrows[idx] -= reaminArrows;
      }
      return;
    }

    const currentPoint = 10 - idx;

    let myNewPoint = myPoint;
    let rivalNewPoint = rivalPoint;

    if (reaminArrows - info[idx] - 1 >= 0) {
      arrows[idx] = info[idx] + 1;
      myNewPoint += currentPoint;
      _helper(idx + 1, reaminArrows - info[idx] - 1, myNewPoint, rivalNewPoint);
    }

    arrows[idx] = 0;
    rivalNewPoint = info[idx] !== 0 ? rivalPoint + currentPoint : rivalPoint;

    _helper(idx + 1, reaminArrows, myPoint, rivalNewPoint);
  })(0, N, 0, 0);

  return pointGap === - Infinity ? [-1] : answer;
}

// console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
// console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
// console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));
