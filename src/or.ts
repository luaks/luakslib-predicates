import {Predicate} from './types';

/**
 * The `or` predicate replicates the logical or operator.
 * If the left, the right or both incoming predicates are true, it is true.
 *
 * Example usage:
 * ```
 * or(equalTo(1), equalTo(2))(1) === true
 * or(always(), never())(false) === true
 * or(never(), never())(false) === false
 * ```
 *
 * @returns a predicate, that will be true if either or both incoming predicates
 * 					are true
 */
export function or<T>(left: Predicate<T>, right: Predicate<T>): Predicate<T> {
	return value => left(value) || right(value);
}
