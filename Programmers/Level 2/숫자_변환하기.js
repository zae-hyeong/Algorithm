/* 클린코드 전
function solution(x, y, n) {
  const arr = Array.from({ length: y + 1 }, () => 0);
  console.log(arr);

  for (let i = x; i <= y; i++) {
    if (i !== x && arr[i] === 0) {
      arr[i] = -1;
      continue;
    }

    if (i + n <= y) {
      arr[i + n] =
        arr[i + n] === 0 ? arr[i] + 1 : Math.min(arr[i] + 1, arr[i + n]);
    }

    if (i * 2 <= y) {
      arr[2 * i] =
        arr[2 * i] === 0 ? arr[i] + 1 : Math.min(arr[i] + 1, arr[2 * i]);
    }

    if (i * 3 <= y) {
      arr[3 * i] =
        arr[3 * i] === 0 ? arr[i] + 1 : Math.min(arr[i] + 1, arr[3 * i]);
    }
  }

  console.log(arr);
  return arr[y];
}
*/

function solution(x, y, n) {
  // 공간복잡도를 생각한다면 Array가 아니라, Hash를 사용하는 방법도 있다.
  const arr = Array.from({ length: y + 1 }, () => 0);
  console.log(arr);

  for (let i = x; i <= y; i++) {
    if (i !== x && arr[i] === 0) {
      arr[i] = -1;
      continue;
    }

    for (const k of [i + n, i * 2, i * 3]) {
      arr[k] = (arr[k] === 0) ? arr[i] + 1 : Math.min(arr[i] + 1, arr[k]);
    }
  }

  console.log(arr);
  return arr[y];
}

console.log(solution(10, 40, 5));
console.log(solution(10, 40, 30));
console.log(solution(2, 5, 4));
