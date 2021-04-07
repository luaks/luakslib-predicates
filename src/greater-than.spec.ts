import {greaterThan} from './greater-than';

describe('greaterThan', () => {
	it('should be true if the incoming value 13 is greater than 10', () => {
		expect(greaterThan(10)(13)).toBe(true);
	});
	it('should be false if the incoming value 9 is smaller than 10', () => {
		expect(greaterThan(10)(9)).toBe(false);
	});
});
