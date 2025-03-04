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

function solution(skill, skill_trees) {
  var answer = 0;
  var regex = new RegExp(`[^${skill}]`, 'g');

  return skill_trees
      .map((x) => x.replace(regex, ''))
      .filter((x) => {
          return skill.indexOf(x) === 0 || x === "";
      })
      .length
}


console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));