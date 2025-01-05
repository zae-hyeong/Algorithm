function solution(t, p) {
  let count = 0;
  const numP = Number(p);

  Array.from(t).forEach((_, i) => {
    if (i + p.length > t.length) return;
    if (Number(t.slice(i, i + p.length)) <= numP) 
      count++;
  });

  return count;
}

console.log(solution("10203", "15"));