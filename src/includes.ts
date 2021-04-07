import {Predicate} from './types';

/**
 * The `includes` predicate will be true if the incoming array includes the
 * defined search element.
 *
 * Example usage:
 * ```
 * includes(1)([1,2,3]) === true
 * includes(4)([1,2,3]) === false
 * ```
 *
 * @returns a predicate, that will always be true
 */
export function includes<T>(searchElement: T): Predicate<T[]> {
	return array => array.includes(searchElement);
}
