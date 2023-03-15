import { isPowerOfTwo, isPowerOfTwoBitWise } from './index';

describe('Is power of two', () => {
	it('Is power of two', () => {
		expect(isPowerOfTwo(1)).toEqual(true);
		expect(isPowerOfTwo(5)).toEqual(false);
		expect(isPowerOfTwo(8)).toEqual(true);
	});

	it('Is power of two bit wise', () => {
		expect(isPowerOfTwoBitWise(1)).toEqual(true);
		expect(isPowerOfTwoBitWise(5)).toEqual(false);
		expect(isPowerOfTwoBitWise(8)).toEqual(true);
	});
});
