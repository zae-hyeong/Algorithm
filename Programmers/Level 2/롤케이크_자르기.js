function solution(topping) {
    const brother = new Map();
    const me = new Map();

    topping.forEach(v => {
        if(!brother.has(v)) brother.set(v, 0);
        brother.set(v, brother.get(v) + 1);
    });

    let answer = 0;

    for (let i = 0; i < topping.length; i++) { 
        brother.set(topping[i], brother.get(topping[i]) - 1);
        if(brother.get(topping[i]) === 0) delete brother.delete(topping[i]);

        if(!me.has(topping[i])) me.set(topping[i], 0);
        me.set(topping[i], me.get(topping[i]) + 1);
        
        if (brother.size === me.size) answer++;
    }

    return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); //2
console.log(solution([1, 2, 3, 1, 4])); //0