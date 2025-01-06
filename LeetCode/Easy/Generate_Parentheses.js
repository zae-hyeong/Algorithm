/**
 * 해결 소감 : 별도의 함수 두 개를 사용하는게 아니라, 중첩 선언하고 사용함으로써 부모 함수의 변수를 전역 변수처럼 사용할 수 있다느 사실을 처음 알게 되었다.
 * 처음 풀이에서 "재귀로 들어가지 않는" 조건에 집중해, "재귀로 들어가야하는" 조건을 생각하지 못해 문제 풀이에 어려움이 있었다.
 * 약간의 발상 변화로도 문제를 훨씬 쉽게 풀 수 있다는 사실을 느끼게 되었다.
*/
let solution = (n) => {
    var resultArray = [];

    function makeParentheses(str, numOfStartBrackets, numOfEndBrackets) {
        if (numOfStartBrackets <= 0 && numOfEndBrackets <= 0) {
            resultArray.push(str);
            return;
        }
        if (numOfStartBrackets != 0) {
            makeParentheses(str+'(', numOfStartBrackets-1, numOfEndBrackets);
        }
        if (numOfStartBrackets < numOfEndBrackets) {
            makeParentheses(str+')', numOfStartBrackets, numOfEndBrackets-1);
        }
    }

    makeParentheses('', n, n);

    console.log(`Result Array : ${resultArray}`);
}