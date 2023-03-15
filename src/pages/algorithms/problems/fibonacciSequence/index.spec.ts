import { fibonacciSequence, recursiveFibonacci } from './index';

describe('Fibonacci Sequence', () => {
	it('Fibonacci Sequence', () => {
		expect(fibonacciSequence(2)).toEqual([0, 1]);
		expect(fibonacciSequence(3)).toEqual([0, 1, 1]);
		expect(fibonacciSequence(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
	});

	it('Recursive fibonacci Sequence', () => {
		expect(recursiveFibonacci(0)).toEqual(0);
		expect(recursiveFibonacci(1)).toEqual(1);
		expect(recursiveFibonacci(6)).toEqual(8);
	});
});
