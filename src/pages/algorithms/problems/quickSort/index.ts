export const quickSort = (arr: number[]) => {
	if (arr.length < 2) return arr;

	let pivot = arr[arr.length - 1];
	const left = [],
		right = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
};

// Worst case, when array is already sorted - Big-O - O(n^2) - Quadratic
// Avarage case, when array is already sorted - Big-O - O(nlogn) - Logorithm
