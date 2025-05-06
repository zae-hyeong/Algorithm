function solution(n, stations, w) {
    let answer = 0;
    
    let start = 1;
    const range = 2 * w + 1;
    
    stations.forEach((v, i) => {
        const apts = v - w - start;
        if(apts > 0) {
            answer += Math.floor(apts / range);
            if(apts % range > 0) answer += 1;
        }
        
        start = v + w + 1;
    });
    
    if(n > stations.at(-1)) {
        const apts = n - start + 1;
        
        if(apts > 0) {
            answer += Math.floor(apts / range);
            if(apts % range > 0) answer += 1;
        }
    }

    return answer;
}