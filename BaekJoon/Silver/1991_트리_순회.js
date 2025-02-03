class Tree {
  constructor() {
    this.hash = {};
  }

  /** @param {string} input */
  push(input) {
    //input = 'A B C' 형식
    const [partant, left, right] = input.split(" ");
    if (!this.hash.hasOwnProperty(partant))
      this.hash[partant] = { left: null, right: null };

    if (left !== ".") this.hash[partant].left = left;
    if (right !== ".") this.hash[partant].right = right;
  }

  preorder() {
    const result = [];
    const hash = this.hash;
    (function _startFrom(current) {
      result.push(current);
      if (hash[current].left !== null) _startFrom(hash[current].left);
      if (hash[current].right !== null) _startFrom(hash[current].right);
    })("A");

    console.log(result.join(""));
  }

  inorder() {
    const result = [];
    const hash = this.hash;
    (function _startFrom(current) {
      if (hash[current].left !== null) _startFrom(hash[current].left);
      result.push(current);
      if (hash[current].right !== null) _startFrom(hash[current].right);
    })("A");

    console.log(result.join(""));
  }

  postorder() {
    const result = [];
    const hash = this.hash;
    (function _startFrom(current) {
      if (hash[current].left !== null) _startFrom(hash[current].left);
      if (hash[current].right !== null) _startFrom(hash[current].right);
      result.push(current);
    })("A");

    console.log(result.join(""));
  }
}

/**
 * @param {Array<string>} inputLines
 */
const solution = (inputLines) => {
  const [N, ...lines] = inputLines;
  const tree = new Tree();
  lines.forEach((v) => tree.push(v));
  // console.log(tree.hash);

  tree.preorder();
  tree.inorder();
  tree.postorder();
};

solution(["7", "A B C", "B D .", "C E F", "E . .", "F . G", "D . .", "G . ."]);
