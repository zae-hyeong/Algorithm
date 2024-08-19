function solution(s) {
    var answer = 0;

    for (subSIndex in s) {
        isBrackets(s.slice(subSIndex).concat(s.slice(0, subSIndex))) && answer++;
    }

    return answer;
}

function isBrackets(s) {
    const b1Stack = [];  // []
    const b2Stack = [];  // {}
    const b3Stack = [];  // ()

    for (b of s) {

        switch (b) {
            case "[":
                b1Stack.push(b);
                break;
            case "{":
                b2Stack.push(b);
                break;
            case "(":
                b3Stack.push(b);
                break;
            case "]":
                if (b1Stack.pop() === undefined) return false;
                break;
            case "}":
                if (b2Stack.pop() === undefined) return false;
                break;
            case ")":
                if (b3Stack.pop() === undefined) return false;
                break;
        }
    }

    if (b1Stack.length && b2Stack.length && b3Stack.length) return false;
    return true;
}

const test = () => {
    console.log(solution("[](){}"));
    console.log(solution("}]()[{"));
    console.log(solution("[)(]"));
    console.log(solution("}}}"));
}

test();