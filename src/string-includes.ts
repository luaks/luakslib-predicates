import {Predicate} from './types';

/**
 * The `stringIncludes` predicate will check if an incoming string contains a
 * predefined search string.
 *
 * Example usage:
 * ```
 * stringIncludes('e')('hello') === true
 * stringIncludes('e')('banana') === false
 * ```
 *
 * @returns a predicate, that will check if the incoming string contains a
 * predefined string.
 */
export function stringIncludes(searchString: string): Predicate<string> {
  return value => value.includes(searchString)
}
