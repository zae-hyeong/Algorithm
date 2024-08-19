function solution(s) {
    var answer = 0;

    for (subSIndex in s) {
        isBrackets(s.slice(subSIndex).concat(s.slice(0, subSIndex))) && answer++;
    }

    return answer;
}

function isBrackets(s) {
    const bracketStack = [];

    let c = '';
    for (b of s) { 
        switch (b) {
            case "[" :
            case "{" :
            case "(" :
                bracketStack.push(b);
                break;
            case "]":
                c = bracketStack.pop();
                if (c === undefined || c !== "[") return false;
                break;
            case "}":
                c = bracketStack.pop();
                if (c === undefined || c !== "{") return false;
                break;
            case ")":
                c = bracketStack.pop();
                if (c === undefined || c !== "(") return false;
                break;
        }
    }

    return bracketStack.length === 0 ? true : false;
}

const test = () => {
    console.log(solution("[](){}"));
    console.log(solution("}]()[{"));
    console.log(solution("[)(]"));
    console.log(solution("}}}"));
}

test();