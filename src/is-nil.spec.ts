import {isNil} from './is-nil';

describe('isNil', () => {
	it('should be true if the incoming value is null', () => {
		expect(isNil()(null)).toBe(true);
	});
	it('should be true if the incoming value is undefined', () => {
		expect(isNil()(undefined)).toBe(true);
	});
	it('should be false if the incoming value is 0', () => {
		expect(isNil()(0)).toBe(false);
	});
});
