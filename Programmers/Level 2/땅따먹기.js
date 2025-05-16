function solution(land) {
    var answer = 0;
    
    for (let i = 1; i < land.length; i++) {
        for(let j = 0; j < 4; j++) {
            const curVal = land[i][j];
            
            for(let k = 0; k < 4; k++) {
                if(k === j) continue;
                
                land[i][j] = Math.max(land[i][j], curVal + land[i - 1][k]);
            }
        }
    }

    return Math.max(...land.at(-1));
}