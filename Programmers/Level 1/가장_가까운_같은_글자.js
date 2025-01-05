function solution(s) {
  var hash = new Map();
  const answer = Array.from({length: s.length}, () => -1);

  Array.from(s).forEach((v, i) => {
    if(hash.has(v)) {
      answer[i] = i - hash.get(v);
    }
    hash.set(v, i);
  });

  return answer;
}

function solution2(s) {
  var hash = new Map();

  return Array.from(s).map((v, i) => {
    const result = hash.has(v) ? i - hash.get(v) : -1;

    hash.set(v, i);

    return result;
  });
}