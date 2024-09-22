const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", function (line) {
  solution(line.trim());
  process.exit();
});

// 문제 풀이
function solution(input) {
	const split = input.split('');
	const stack = [];
	let answer = '';

	// 괄호를 만났을 때
	for (let i = 0; i < split.length; i += 1) {
		const str = split[i];
		
		if (str === '(') {
			stack.push(str);
		} else if (str === ')') {
			while (stack.length && stack[stack.length - 1] !== '(') {
				answer += stack.pop();
			}
			stack.pop();
		} else if (str === '*' || str === '/') {
			while (stack.length && stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/') {
				answer += stack.pop();
			}
			stack.push(str);
		} else if (str === '+' || str === '-') {
			while (stack.length && stack[stack.length - 1] !== '(') {
				answer += stack.pop();
			}
			stack.push(str);
		} else {
			answer += str;
		}
	}

	while (stack.length) {
		answer += stack.pop();
	}

  console.log(answer);
	// return answer;
}