class Node {
  constructor([x, y, value]) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(nodeInfo) {
    const nodes = nodeInfo.sort(([, ya], [, yb]) => yb - ya);

    nodes.forEach((node) => this.push(node));

    return this.root;
  }

  push([x, y, value]) {
    const newNode = new Node([x, y, value]);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      const side = currentNode.x > newNode.x ? "left" : "right";

      if (currentNode[side] === null) {
        currentNode[side] = newNode;
        break;
      } else currentNode = currentNode[side];
    }
  }

  preOrder() {
    const resultArr = [];

    (function pre(node) {
      resultArr.push(node.value);
      if (node.left !== null) pre(node.left);
      if (node.right !== null) pre(node.right);
    })(this.root);

    return resultArr;
  }

  postOrder() {
    const resultArr = [];

    (function post(node) {
      if (node.left !== null) post(node.left);
      if (node.right !== null) post(node.right);
      resultArr.push(node.value);
    })(this.root);

    return resultArr;
  }
}

function solution(nodeinfo) {
  const tree = new Tree();

  const nodes = nodeinfo.map(([x, y], index) => [x, y, index + 1]);

  tree.buildTree(nodes);

  return [tree.preOrder(), tree.postOrder()];
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);
//[ 전위 순회 : [7,4,6,9,1,8,5,2,3],
//  후위 순회 : [9,6,5,8,1,4,3,2,7]  ]
