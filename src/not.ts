import {Predicate} from './types';

/**
 * The `not` predicate will negate the incoming predicate.
 *
 * Example usage:
 * ```
 * not(never())(false) === true
 * not(always())(null) === false
 * ```
 *
 * @returns a predicate, that will negate an incoming predicate
 */
export function not<T>(predicate: Predicate<T>): Predicate<T> {
	return value => !predicate(value);
}
