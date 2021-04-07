import {is} from './is';

describe('is', () => {
	it('should be true, when the incoming value is true', () => {
		expect(is(() => true)(null)).toBe(true);
	});

	it('should be false, when the incoming value is false', () => {
		expect(is(() => false)(null)).toBe(false);
	});
})
