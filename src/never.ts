import {Predicate} from './types';

/**
 * The `never` predicate will never be true.
 * Its primary use case is for testing other predicates.
 *
 * Example usage:
 * ```
 * never()(null) === false
 * never()(false) === false
 * ```
 *
 * @returns a predicate, that will always be false
 */
export function never(): Predicate<unknown> {
  return () => false;
}
