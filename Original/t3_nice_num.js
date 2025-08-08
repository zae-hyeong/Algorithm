function solution(s) {
    let max = -1;

    for(let i = 0; i < s.length - 2; i++) {
        if(s[i] === s[i+1] && s[i+1] === s[i+2])
            max = Math.max(max, parseInt(s.substring(i, i+3)));
    }

    return max;
}

console.log(solution("12223"));  // 222
console.log(solution("123"));  // -1
console.log(solution("111999333"));  // 999