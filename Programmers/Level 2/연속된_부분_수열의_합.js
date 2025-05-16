function solution(sequence, k) {
    
    let front = 0;
    let rear = 0;
    
    let sum = sequence[0];
    
    const hash = new Map();
    
    do {
        if(sum === k) {
            if(!hash.has(rear - front)) hash.set(rear - front, []);
            hash.get(rear - front).push([front, rear]);
            sum += sequence[++rear];
        } else if (sum > k) {
            sum -= sequence[front++];
        } else {
            sum += sequence[++rear];
        }
    } while(front <= rear && rear < sequence.length);

    return hash.get(Math.min(...hash.keys())).sort((a, b) => a[0] - b[0])[0];
}