import {isNull} from './is-null';

describe('isNull', () => {
	it('should be true if the incoming value is null', () => {
		expect(isNull()(null)).toBe(true);
	});

	it('should be false if the incoming value is 1', () => {
		expect(isNull()(1)).toBe(false);
	});

	it('should be false if the incoming value is 0', () => {
		expect(isNull()(0)).toBe(false);
	});

	it('should be false if the incoming value is undefined', () => {
		expect(isNull()(undefined)).toBe(false);
	});
});
