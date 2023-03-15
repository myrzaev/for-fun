export const mergeSort = (arr: number[]) => {
	if (arr.length < 2) {
		return arr;
	}

	const mid = Math.floor(arr.length / 2);
	const leftArr = arr.slice(0, mid);
	const rightArr = arr.slice(mid);

	return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArray, rightArray) => {
	const sortedArr = [];
	while (leftArray.length && rightArray.length) {
		if (leftArray[0] <= rightArray[0]) {
			sortedArr.push(leftArray.shift());
		} else {
			sortedArr.push(rightArray.shift());
		}
	}

	return [...sortedArr, ...leftArray, ...rightArray];
};

// Big-O - O(nlogn) - Best solution for sort
