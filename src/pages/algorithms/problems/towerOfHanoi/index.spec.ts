import { towerOfHanoi } from './index';

describe('Tower of hanoi', () => {
	it('Tower of hanoi', () => {
		expect(towerOfHanoi(3, 'A', 'C', 'B')).toEqual(true);
	});
});
