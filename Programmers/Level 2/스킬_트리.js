function solution(skillOrder, skillTrees) {
  let cnt = 0;

  const map = new Map();
  for(let i = 0; i < skillOrder.length; i++) {
    map.set(skillOrder[i], i);
  }

  outer: for(const skillTree of skillTrees) {
    let order = 0;

    for(let i = 0; i < skillTree.length; i++) {
      const skill = skillTree[i];

      if(map.has(skill)) {
        if(order === map.get(skill)) {
          order++;
        } else {
          continue outer;
        }
      }
    }

    cnt++;
  }

  return cnt;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));