import {isUndefined} from './is-undefined';

describe('isUndefined', () => {
	it('should be true if the incoming value is undefined', () => {
		expect(isUndefined()(undefined)).toBe(true);
	});

	it('should be false if the incoming value is 1', () => {
		expect(isUndefined()(true)).toBe(false);
	});

	it('should be false if the incoming value is null', () => {
		expect(isUndefined()(null)).toBe(false);
	});

	it('should be false if the incoming value is 0', () => {
		expect(isUndefined()(0)).toBe(false);
	});
});
