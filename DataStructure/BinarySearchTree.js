class Data {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Data(data);
    if (this.root === null) {
      this.root = newNode;
      this.size++;
      return newNode;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.data < newNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          this.size++;
          return newNode;
        } else currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          this.size++;
          return newNode;
        } else currentNode = currentNode.left;
      }
    }
  }

  getMin() {
    let currentNode = this.root;

    while (currentNode.left !== null) currentNode = currentNode.left;

    return currentNode.data;
  }

  getMax() {
    let currentNode = this.root;

    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }

  getMin() {
    let currentNode = this.root;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  inOrderTraversal() {
    const result = [];
    function indore(root) {
      if (root === null) return;
      indore(root.left);
      result.push(root.data);
      indore(root.right);
    }

    indore(this.root);
    return result;
  }

  preOrderTraversal() {
    const result = [];
    function indore(root) {
      if (root === null) return;
      result.push(root.data);
      indore(root.left);
      indore(root.right);
    }

    indore(this.root);
    return result;
  }

  postOrderTraversal() {
    const result = [];
    function indore(root) {
      if (root === null) return;
      indore(root.left);
      indore(root.right);
      result.push(root.data);
    }

    indore(this.root);
    return result;
  }

  BFS() {
    const visited = [];
    const queue = [];

    visited.push(this.root.data);
    queue.push(this.root);

    while (queue.length > 0) {
      const node = queue.shift();
      if (node.left !== null) {
        queue.push(node.left);
        visited.push(node.left.data);
      }
      if (node.right !== null) {
        queue.push(node.right);
        visited.push(node.right.data);
      }
    }

    return visited;
  }
}

function test() {
  const tree = new BinarySearchTree();

  tree.push(40); //       40
  tree.push(45); //      /  \
  tree.push(30); //     30   45
  tree.push(27); //    /  \
  tree.push(35); //   27  35
  tree.push(32); //      /  \
  tree.push(37); //     32   37

  console.log(tree.BFS());
}

test();
