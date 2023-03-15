import { LSIndexOfElement, BSIndexOfElement } from './index';

describe('Index of Element', () => {
	it('Linear Search of Element', () => {
		expect(LSIndexOfElement([-5, 2, 10, 4, 6], 10)).toEqual(2);
		expect(LSIndexOfElement([-5, 2, 10, 4, 6], 6)).toEqual(4);
		expect(LSIndexOfElement([-5, 2, 10, 4, 6], 20)).toEqual(-1);
	});

	it('Binary Search of Element', () => {
		expect(BSIndexOfElement([-5, 2, 4, 6, 10], 10)).toEqual(4);
		expect(BSIndexOfElement([-5, 2, 4, 6, 10], 6)).toEqual(3);
		expect(BSIndexOfElement([-5, 2, 4, 6, 10], 20)).toEqual(-1);
	});
});
