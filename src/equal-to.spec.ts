import {equalTo} from './equal-to';

describe('equalTo', () => {
	it('should be true if it is equal', () => {
		expect(equalTo(1)(1)).toBe(true);
	});
	it('should be false if it is not equal', () => {
		expect(equalTo(1)(2)).toBe(false);
	});
	it('should be false if it is not strictly equal', () => {
		expect(equalTo({})({})).toBe(false);
	});
});
