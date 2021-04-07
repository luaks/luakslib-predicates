import {Predicate} from './types';

/**
 * The `greaterThan` predicate will be true, if the incoming value is greater
 * than a predefined value.
 *
 * Example usage:
 * ```
 * greaterThan(10)(11) === true
 * greaterThan(10)(1) === false
 * ```
 *
 * @returns a predicate, that will be true, if the incoming value is greater
 * than a predefined value.
 */
export function greaterThan(comparedValue: number): Predicate<number> {
  return value => value > comparedValue;
}
