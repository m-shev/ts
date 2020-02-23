type Fish = {
    swim(): void;
}

type Bird = {
    fly(): void;
}

function isFish(value: any): value is Fish  {
    return value.swim !== undefined;
}

// function isBird(value: any): value is Bird {
//     return value.fly !== undefined;
// }


export function start(entity: Fish | Bird): void {
    if (isFish(entity)) {
        entity.swim();
    } else {
        entity.fly();
    }
}
