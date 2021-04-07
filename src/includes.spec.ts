import {includes} from './includes';

describe('includes', () => {
	it('should be true if the array includes the search element', () => {
		expect(includes(2)([1, 2, 3])).toBe(true);
	});
	it('should be false if the array does not include the search element', () => {
		expect(includes(4)([1, 2, 3])).toBe(false);
	});
});
