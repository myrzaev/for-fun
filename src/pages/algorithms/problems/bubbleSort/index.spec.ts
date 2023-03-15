import { bubbleSort } from './index';

describe('Bubble Sort', () => {
	it('Bubble Sort', () => {
		expect(bubbleSort([8, 20, -2, 4, -6])).toEqual([-6, -2, 4, 8, 20]);
		expect(bubbleSort([100, -20, -21, 0, 3])).toEqual([-21, -20, 0, 3, 100]);
		expect(bubbleSort([-1000, 20, 0, 100, 1000])).toEqual([
			-1000, 0, 20, 100, 1000
		]);
	});
});
