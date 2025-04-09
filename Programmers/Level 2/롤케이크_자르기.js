function solution(topping) {
    const brother = {};
    const me = {};

    topping.forEach(v => {
        if(brother[v] === undefined) brother[v] = 0;
        brother[v]++;
    });

    let answer = 0;

    for (let i = 0; i < topping.length; i++) { 
        brother[topping[i]] -= 1;
        if(brother[topping[i]] === 0) delete brother[topping[i]];

        if(me[topping[i]] === undefined) me[topping[i]] = 0;
        me[topping[i]] += 1;
        
        if (Object.keys(brother).length === Object.keys(me).length) answer++;
    }

    return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); //2
console.log(solution([1, 2, 3, 1, 4])); //0