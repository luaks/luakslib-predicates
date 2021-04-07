import {stringIncludes} from './string-includes';

describe('stringIncludes', () => {
	it('should be true if the incoming string has a' +
		' defined search string as substring', () => {
		expect(stringIncludes('a')('aa')).toBe(true);
	});
	it('should be false if the incoming string does not have a' +
		' defined search string as substring', () => {
		expect(stringIncludes('a')('bb')).toBe(false);
	});
})
