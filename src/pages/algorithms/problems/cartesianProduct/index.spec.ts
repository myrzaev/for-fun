import { cartesianProduct } from './index';

describe('Cartesian Product', () => {
	it('Cartesian Product', () => {
		expect(cartesianProduct([1, 2], [3, 4, 5])).toEqual([
			[1, 3],
			[1, 4],
			[1, 5],
			[2, 3],
			[2, 4],
			[2, 5]
		]);
		expect(cartesianProduct([1, 2], [3, 4])).toEqual([
			[1, 3],
			[1, 4],
			[2, 3],
			[2, 4]
		]);
	});
});
