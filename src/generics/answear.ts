// Generics with constrains
export function mergeWithConstrains<T extends object, R extends object>(a: T, b: R): T & R {
    return {...a, ...b}
}

export function printItems1<T extends {[Symbol.iterator]: () => IterableIterator<any>}>(value: T): void {
    for (const k of value) {
        console.log(k);
    }
}


export class Queue1<T> {
    private arr: T[];
    public [Symbol.iterator]: () => IterableIterator<T>;

    constructor(...args: T[]) {
        this.arr = args;
        this[Symbol.iterator] = this.makeIterator(this.arr);
    }

    public add(item: T): void {
        this.arr.push(item);
    }

    public clear(): void {
        this.arr = [];
    }

    public getNext(): T | undefined {
        return  this.arr.pop();
    }

    private makeIterator(arr: T[]): () => IterableIterator<T> {
        return function* () {
            for (let i = 0; i < arr.length; i++) {
                yield arr[i];
            }
        }
    }
}
