function subset(arr, N) {
	const seleced = [];
	let count = 0;

	(function _sub(idx) {
		if (idx >= N) {
			console.log(seleced);
			count++;
			return;
		}
		
		seleced.push(arr[idx]);
		_sub(idx + 1);
		seleced.pop();
		_sub(idx + 1);

	})(0);

	console.log("total count : " + count);
}

subset([1, 2, 3, 4, 5], 3);
