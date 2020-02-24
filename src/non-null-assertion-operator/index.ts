export interface ICallback {
    (): void
}

function isFunction(value: any): value is Function  {
    return typeof value === 'function';
}

export function onEvent2(cb?: ICallback) {
    isFunction(cb) && cb();
}

// function onEvent(cb?: ICallback) {
//     cb();
// }
//
// function onEvent1(cb?: ICallback): boolean {
//     if (typeof cb === 'function') {
//         cb();
//     }
// }

type Fish = {
    swim(): void;
}

type Bird = {
    fly(): void;
}

function isFish(value: any): value is Fish  {
    return value.swim !== undefined;
}

function isBird(value: any): value is Bird {
    return value.fly !== undefined;
}

function start(entity: Fish | Bird): void {
    if (isFish(entity)) {
        entity.swim();
    } else if (isBird(entity)) {
        entity.fly();
    }
}


