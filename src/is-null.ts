import {Predicate} from './types';
import {equalTo} from './equal-to';

/**
 * The `isNull` predicate checks for strict equality.
 *
 * Example usage:
 * ```
 * isNull()(null) === true;
 * isNull()('green') === false;
 * ```
 *
 * @returns a predicate that checks incoming values for strict equality
 *					with null
 */
export function isNull(): Predicate<unknown> {
	return equalTo(null as unknown);
}
