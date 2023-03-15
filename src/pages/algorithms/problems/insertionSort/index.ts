export const insertionSort = (arr: number[]) => {
	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		let j = i - 1;

		while (arr[j] > current) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}

		arr[j + 1] = current;
	}

	return arr;
};

// Big-O - O(n^2) - Quadratic
