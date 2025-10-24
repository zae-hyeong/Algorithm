class DisjointSet {
	constructor(N) {
		this.parent = [];
		for (let i = 0; i < N; i++) {
			this.parent[i] = i;
		}
	}

	union(a, b) {
		const pA = this.find(a);
		const pB = this.find(b);

		if (pA == pB) return false;

		this.parent[pB] = pA;
		return true;
	}

	find(idx) {
		if (this.parent[idx] == idx) {
			return idx;
		}

		return this.parent[idx] = this.find(this.parent[idx]);
	}

	getNumOfSet() {
        console.log(this.parent);
		const set = new Set();
		for (let i = 0; i < this.parent.length; i++) {
			set.add(this.find(i));
		}
		return set.size;
	}
}

const s = new DisjointSet(10);

console.log(s.union(2, 1));
console.log(s.union(2, 3));
console.log(s.union(2, 4));
console.log(s.union(2, 5));
console.log(s.union(2, 6));

console.log(s.union(7, 8));
console.log(s.union(7, 9));

console.log(s.getNumOfSet());
