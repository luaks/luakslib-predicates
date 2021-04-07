import {never} from './never';
import {always} from './always';
import {not} from './not';

describe('not', () => {
	it('should be true if the incoming predicate is false', () => {
		expect(not(never())(null)).toBe(true);
	});
	it('should be false if the incoming predicate is true', () => {
		expect(not(always())(null)).toBe(false);
	});
})
