import {Predicate} from './types';

/**
 * The `is` predicate proxies to the incoming predicate.
 * The primary idea is to aid in readability of other predicates.
 *
 * Example usage:
 * ```
 * is(greaterThan(5))(6) === true
 * ```
 *
 * @param predicate
 */
export function is<T>(predicate: Predicate<T>): Predicate<T> {
	return predicate;
}
