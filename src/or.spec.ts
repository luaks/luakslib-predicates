import {always} from './always';
import {or} from './or';

describe('or', () => {
	it('should be true if both incoming parameters are true', () => {
		expect(or(always(), always())(null)).toBe(true);
	});
});
