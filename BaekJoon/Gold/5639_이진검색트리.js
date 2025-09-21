let givenInput = [];
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline
    .on("line", function (line) {
        givenInput.push(line.trim());
    })
    .on("close", function () {
        solution(givenInput);
        process.exit();
    });

/**
 * @param {string[]} inputLines
 */
function solution(inputLines) {
  const preorder = inputLines.map(Number);
  const result = [];

  /**
   * 후위 순회를 재귀적으로 찾는 함수
   * @param {number} start - 현재 서브트리가 시작되는 인덱스
   * @param {number} end - 현재 서브트리가 끝나는 인덱스
   */
  (function postOrder(start, end) {
    // 순회할 노드가 없으면 종료
    if (start > end) 
      return;
    

    const root = preorder[start];
    let mid = end + 1; // 오른쪽 서브트리가 시작되는 인덱스

    // start + 1 부터 순회하며 루트보다 큰 첫 번째 값을 찾는다.
    // 그 위치가 오른쪽 서브트리의 시작점이 된다.
    for (let i = start + 1; i <= end; i++) {
      if (preorder[i] > root) {
        mid = i;
        break;
      }
    }

    // 1. 왼쪽 서브트리에 대해 재귀 호출
    // 시작점 바로 다음부터 오른쪽 서브트리 시작점 전까지
    postOrder(start + 1, mid - 1);

    // 2. 오른쪽 서브트리에 대해 재귀 호출
    // 오른쪽 서브트리 시작점부터 끝까지
    postOrder(mid, end);

    // 3. 루트 노드 값을 결과에 추가
    result.push(root);
  })(0, preorder.length - 1);

  console.log(result.join('\n'));
}

solution(["50", "30", "24", "5", "28", "45", "98", "52", "60"]);
