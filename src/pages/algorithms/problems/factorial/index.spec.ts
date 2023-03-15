import { factorial, recursiveFactorial } from './index';

describe('Factorial', () => {
	it('Factorial', () => {
		expect(factorial(4)).toEqual(24);
		expect(factorial(5)).toEqual(120);
		expect(factorial(6)).toEqual(720);
	});

	it('Recursive factorial', () => {
		expect(recursiveFactorial(4)).toEqual(24);
		expect(recursiveFactorial(5)).toEqual(120);
		expect(recursiveFactorial(6)).toEqual(720);
	});
});
