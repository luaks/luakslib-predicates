import {always} from './always';

describe('always', () => {
	it('should be true', () => {
		expect(always()(null)).toBe(true);
	});
});
