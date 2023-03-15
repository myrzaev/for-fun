export const factorial = (n: number) => {
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result = result * i;
	}
	return result;
};
// Big-O = O(n) - Linear

export const recursiveFactorial = (n: number) => {
	return n === 0 ? 1 : n * factorial(n - 1);
};
