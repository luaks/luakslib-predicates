import {never} from './never';


describe('never', () => {
	it('should be false', () => {
		expect(never()(null)).toBe(false);
	});
});
