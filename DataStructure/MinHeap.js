class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    getMin() {
        return this.heap[1];
    }

    push(data) {
        this.heap.push(data);

        this.bubbleUp();
    }

    pop() {
        this.swap(0, this.heap.length - 1);
        const returnVal = this.heap.pop();

        this.bubbleDown();

        return returnVal;
    }

    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }

    bubbleUp() {
        let curIdx = this.heap.length - 1;
        let parentIdx = Math.floor((curIdx - 1) / 2);

        while (this.heap[parentIdx] > this.heap[curIdx]) {
            this.swap(curIdx, parentIdx);

            curIdx = parentIdx;
            parentIdx = Math.floor((curIdx - 1) / 2);
        }
    }

    bubbleDown() {
        let curIdx = 0;

        while (curIdx < this.heap.length) {
            let smallerIdx = curIdx;

            let leftChildIdx = 2 * curIdx + 1;
            let rightChildIdx = 2 * curIdx + 2;

            if (this.heap[leftChildIdx] && this.heap[leftChildIdx] < this.heap[smallerIdx]) {
                smallerIdx = leftChildIdx;
            }

            if (this.heap[rightChildIdx] && this.heap[rightChildIdx] < this.heap[smallerIdx]) {
                smallerIdx = rightChildIdx;
            }

            if (curIdx === smallerIdx) break;

            this.swap(curIdx, smallerIdx);
            curIdx = smallerIdx;
        }
    }
}

const test = () => {
    const heap = new MinHeap();

    heap.push(-3);
    heap.push(5);
    heap.push(4);
    heap.push(2);
    heap.push(-1);
    heap.push(7);
    heap.push(0);

    console.log(heap.heap);
    console.log("POP::", heap.pop(), "----------------------------------");
    console.log(heap.heap);
    console.log("POP::", heap.pop(), "----------------------------------");
    console.log(heap.heap);
    console.log("POP::", heap.pop(), "----------------------------------");
    console.log(heap.heap);
    console.log("POP::", heap.pop(), "----------------------------------");
    console.log(heap.heap);
    console.log("POP::", heap.pop(), "----------------------------------");
    console.log(heap.heap);
    console.log("POP::", heap.pop(), "----------------------------------");
    console.log(heap.heap);
    console.log("POP::", heap.pop(), "----------------------------------");
    console.log("POP::", heap.pop(), "----------------------------------");
};

test();
