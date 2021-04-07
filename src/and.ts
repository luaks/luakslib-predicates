import {Predicate} from './types';

/**
 * The `and` predicate will be true if both incoming predicates are true.
 *
 * Example usage:
 * ```
 * and(always(), always())(null) === true;
 * and(isNull(), isUndefined())(null) === false;
 * ```
 *
 * @returns a predicate, that will be true if both incoming predicates are true
 */
export function and<T>(left: Predicate<T>, right: Predicate<T>): Predicate<T> {
  return value => left(value) && right(value);
}
