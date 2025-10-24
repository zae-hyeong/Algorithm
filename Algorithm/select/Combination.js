function combination(arr, N) {
	const seleced = [];
	let count = 0;

	(function _comb(num, idx) {
		if (idx >= N) {
			console.log(seleced);
			count++;
			return;
		}

		for (let i = num; i < arr.length; i++) {
			seleced[idx] = arr[i];
			_comb(i + 1, idx + 1);
			// _comb(i, idx + 1); // 중복조합
		}
	})(0, 0);

	console.log("total count : " + count);
}

combination([1, 2, 3, 4, 5], 3);
