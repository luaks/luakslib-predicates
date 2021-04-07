import {always} from './always';
import {never} from './never';
import {and} from './and';

describe('and', () => {
	it('should be true if both incoming predicates are true', () => {
		expect(and(always(), always())(null)).toBe(true);
	});
	it('should be false if the left predicate is false', () => {
		expect(and(never(), always())(null)).toBe(false);
	});
	it('should be false if the right predicate is false', () => {
		expect(and(always(), never())(null)).toBe(false);
	});
	it('should be false if the left incoming predicate is false', () => {
		expect(and(never(), never())(null)).toBe(false);
	});
})
