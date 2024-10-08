class Heap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  push(data) {
    const move = (index, data) => {
      console.log(index, ", ", data);
      if (this.heap[index] === undefined) {
        this.heap[index] = data;
        return;
      }
      if (data > this.heap[index]) move(2 * index + 2, data);
      else if (data < this.heap[index]) move(2 * index + 1, data);
    };

    move(0, data);
  }

  traversal() {
    const result = [];
    const move = (index) => {
      if (this.heap[index] === undefined) return;

      move(2 * index + 1);
      result.push(this.heap[index]);
      move(2 * index + 2);
    };
    move(0);

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

  console.log(heap.heap);

  console.log(heap.traversal());
}

test();
