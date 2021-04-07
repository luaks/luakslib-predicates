export type Predicate<T> = (value: T) => boolean;
export type PredicateFactory<T, P extends []> = (...params: P) => Predicate<T>;
