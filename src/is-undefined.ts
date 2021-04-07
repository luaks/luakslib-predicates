import {Predicate} from './types';
import {equalTo} from './equal-to';

/**
 * The `isUndefined` predicate checks for strict equality.
 *
 * Example usage:
 * ```
 * isUndefined()(undefined) === true;
 * isUndefined()('green') === false;
 * ```
 *
 * @returns a predicate that checks incoming values for strict equality
 *          with undefined
 */
export function isUndefined(): Predicate<unknown> {
	return equalTo(undefined as unknown);
}
