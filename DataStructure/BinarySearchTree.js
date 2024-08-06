class Data {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Heap {
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

  push2(data) {
    const newNode = new Data(data);

    function move(root, newNode) {
      if (root === null) return;

      if (newNode.data > root.data) {
        if (root.right === null) {
          root.right = newNode;
          return;
        }
        move(root.right);
      } else if (newNode.data <= root.data){ 
        if (root.left === null) {
          root.left = newNode;
          return;
        }
        move(root.left)};
    }

    move(this.root, newNode);
    return;
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

  traversal() {
    // inOrderTraversal
    const result = [];
    function indore(root) {
      if (root === null) return;
      indore(root.left);
      result.push(root.data);
      indore(root.right);
    }

    indore(this.root);
    console.log(result.join(", "));
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
    console.log(result.join(", "));
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
    console.log(result.join(", "));
  }
}

function test() {
  const heap = new Heap();

  heap.push2(40);
  heap.push2(45);
  heap.push2(30);
  heap.push2(27);
  heap.push2(35);
  heap.push2(32);
  heap.push2(37);

  console.log(heap.traversal());
}

test();
