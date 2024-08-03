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

  traversal() {   // inOrderTraversal
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

  heap.push(40);
  heap.push(45);
  heap.push(30);
  heap.push(27);
  heap.push(35);
  heap.push(32);
  heap.push(37);

  console.log(heap.getMin());
  console.log(heap.getMax());
  console.log(heap.traversal());
}

test();
