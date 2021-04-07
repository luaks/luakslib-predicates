import {Predicate} from './types';
import {or} from './or';
import {isUndefined} from './is-undefined';
import {isNull} from './is-null';

/**
 * The `isNil` predicate will check if a value is either `undefined` or `null`.
 *
 * Example usage:
 * ```
 * isNil()(null) === true
 * isNil()(undefined) === true
 * isNil()(0) === false
 * ```
 *
 * @returns a predicate, that will be true if either `undefined` or `null`
 * 					are incoming.
 */
export function isNil(): Predicate<unknown> {
	return or(isUndefined(), isNull());
}
