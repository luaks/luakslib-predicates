import {Predicate} from './types';

/**
 * The `always` predicate will always be true.
 * Its primary use case is for testing other predicates.
 *
 * Example usage:
 * ```
 * always()(null) === true
 * always()(false) === true
 * ```
 *
 * @returns a predicate, that will always be true
 */
export function always(): Predicate<unknown> {
  return () => true;
}
