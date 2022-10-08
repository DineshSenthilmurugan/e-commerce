export interface Action<T extends string = string> {
    type: T;
}

type Subtract<T, U> = Pick<T, Exclude<keyof T, keyof U>>;
export type ActionWithPayload<T extends string, P> = Action<T> & Subtract<P, Action<T>>;
/**
 * Helpers to create action types
 */

export function createAction<T extends string>(type: T): Action<T>; // eslint-disable-line
export function createAction<T extends string, P extends object>(type: T, payload: P): ActionWithPayload<T, P>; // eslint-disable-line
// eslint-disable-next-line
export function createAction<T extends string, P extends object>(type: T, payload?: P) {
    return payload === undefined ? { type } : { ...payload, type };
}

export type FinalReturnType<A> = {
    0: A extends (...args: any[]) => infer R ? FinalReturnType<R> : never;
    1: A;
}[A extends (...args: any[]) => any ? 0 : 1];
interface ActionCreatorMap {
    [actionName: string]: (...arg: any[]) => any;
}
export type ExtractActionTypes<A extends ActionCreatorMap> = FinalReturnType<A[keyof A]>;

export enum ApiStatus {
    NONE = 0,
    PROGRESS = 1,
    SUCCESS = 2,
    ERROR = 3,
}
