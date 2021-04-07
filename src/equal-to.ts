import {Predicate} from './types';

/**
 * The equalTo predicate.
 * It compares an expected value to an actual value for strict equality.
 *
 * Example usage:
 * ```
 * equalTo(5)(5) === true
 * ```
 *
 * @param expected - the value that should be compared to
 * @returns a predicate to check if a value is equal to `expected`
 */
export function equalTo<T>(expected: T): Predicate<T> {
	return (actual: T) => expected === actual;
}
