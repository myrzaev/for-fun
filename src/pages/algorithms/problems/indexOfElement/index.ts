// LS - Linear Search
export const LSIndexOfElement = (arr: number[], target: number) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) return i;
	}
	return -1;
};

// Big-O = O(n)

// BS - Binary Search - WORK ONLY WITH SORT ARRAY
export const BSIndexOfElement = (arr: number[], target: number) => {
	let low = 0;
	let high = arr.length - 1;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (target === arr[mid]) {
			return mid;
		} else if (target < arr[mid]) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return -1;
};

// Big-O = O(logn)
