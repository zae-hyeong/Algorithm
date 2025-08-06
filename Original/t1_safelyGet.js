function safelyGet_1(obj, path) {
  return (function checkUndefined(obj, targetArr, depth) {
    if (targetArr.length === depth) return obj;

    if (obj instanceof Object)
      return checkUndefined(obj[targetArr[depth]], targetArr, depth + 1);
  })(obj, path.split("."), 0);
}

function safelyGet(obj, path) {
  const properties = path.split('.');
  let current = obj;

  for(const property of properties) {
    if (current  === undefined) return undefined;

    current = current[property];
  }

  return current;
}

/* repository가 undefined인 경우 */
const object1 = {
  repository: undefined,
};

/* repository의 readme가 undefined인 경우 */
const object2 = {
  repository: {
    readme: undefined,
  },
};

/** repository.readme 모두가 존재하는 경우 */
const object3 = {
  repository: {
    readme: {
      extension: "md",
      content: "금융을 쉽고 간편하게",
    },
  },
};

console.log(safelyGet(object1, 'repository.readme.extension'));
// -> 반환 값: undefined

console.log(safelyGet(object1, 'repository.readme'));
// -> 반환 값: undefined

console.log(safelyGet(object1, 'repository'));
// -> 반환 값: undefined

console.log(safelyGet(object2, 'repository.readme.extension'));
// -> 반환 값: undefined

console.log(safelyGet(object2, 'repository.readme'));
// -> 반환 값: undefined

console.log(safelyGet(object2, "repository"));
// -> 반환 값: { readme: undefined }

console.log(safelyGet(object3, 'repository.readme.extension'));
// -> 반환 값: 'md'

console.log(safelyGet(object3, 'repository.readme'));
// -> 반환 값: { extension: 'md' }
