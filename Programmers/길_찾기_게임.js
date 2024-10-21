class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.q = [];
    this.head = 0;
    this.tail = 0;
  }

  push(data) {
    this.q.push(data);
    this.tail++;
  }

  pop() {
    this.head++;
  }

  isNotEmpty() {
    return this.head !== this.tail;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(nodeInfo) {
    const nodes = nodeInfo.sort((a, b) =>
      b[1] - a[1] === a[1] - b[1] ? a[0] - b[0] : b[1] - a[1]
    );

    for (let i = 0; i < nodes.length; i++) {
      this.push(nodes[i]);
    }

    return this.root;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.data[0] > newNode.data[0]) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  preOrder(nodeHash) {
    const resultArr = [];

    function pre(root) {
      if (root === null) return;
      resultArr.push(nodeHash.get(`${root.data}`));
      pre(root.left);
      pre(root.right);
    }

    pre(this.root);

    return resultArr;
  }

  postOrder(nodeHash) {
    const resultArr = [];

    function post(root) {
      if (root === null) return;
      post(root.left);
      post(root.right);
      resultArr.push(nodeHash.get(`${root.data}`));
    }

    post(this.root);

    return resultArr;
  }
}

function solution(nodeinfo) {
  const tree = new Tree();
  const indexHash = new Map();

  for (let i = 0; i < nodeinfo.length; i++) {
    indexHash.set(`${nodeinfo[i]}`, i+1);
  }

  tree.buildTree(nodeinfo);

  return [tree.preOrder(indexHash) , tree.postOrder(indexHash)];
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
