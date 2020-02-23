export function merge<T, R>(a: T, b: R): T & R {
    return {...a, ...b}
}


