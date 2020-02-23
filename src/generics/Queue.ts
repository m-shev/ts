export class Queue<T> {
    private arr: T[];

    constructor(...args: T[]) {
        this.arr = args;
    }

    public add(item: T): void {
        this.arr.push(item);
    }

    public clear(): void {
        this.arr = [];
    }

    public getNext(): T | undefined {
        return  this.arr.shift();
    }
 }
