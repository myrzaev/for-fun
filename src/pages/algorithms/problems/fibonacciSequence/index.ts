export const fibonacciSequence = (n: number) => {
	const result = [0, 1];
	for (let i = 2; i < n; i++) {
		result[i] = result[i - 1] + result[i - 2];
	}
	return result;
};
// Big-O = O(n) - Linear

export const recursiveFibonacci = (n: number) => {
	return n < 2 ? n : recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};
// Big-O = O(n^2) - Recursive
