function permutation(arr, N) {
	const seleced = [];
	let count = 0;
	const v = new Array(arr.length).fill(false);

	(function perm(idx) {
		if (idx >= N) {
			console.log(seleced);
			count++;
			return;
		}

		for (let i = 0; i < arr.length; i++) {
			if (v[i]) continue;

			seleced[idx] = arr[i];
			v[i] = true;
			perm(idx + 1);
			v[i] = false;
		}
	})(0);

	console.log("total count : " + count);
}

permutation([1, 2, 3, 4, 5], 3);
