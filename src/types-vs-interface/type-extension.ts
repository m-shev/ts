/**
 * Объявим тип и интерфейс Point
 */
export interface IPoint {
    x: number;
    y: number;
}
//
// interface IPoint3D extends IPoint {
//     z: number;
// }
//
// const point3D: IPoint3D = {
//     x: 0,
//     y: 1,
//     z: 2
// };


export type PointType = {
    x: number;
    y: number;
}

interface IPoint3D extends PointType {
    z: number;
}

const point3D: IPoint3D = {
    x: 0,
    y: 1,
    z: 2
};

//
// type Point3DType = PointType & {
//     z: number;
// }
//
// const point3D: Point3DType = {
//     x: 0,
//     y: 1,
//     z: 2
// };

// export interface IPoint {
//     x: number;
//     y: number;
// }
//
// export type Point3DType = IPoint & {
//     z: number;
// }
//
// const point3D: Point3DType = {
//     x: 0,
//     y: 1,
//     z: 2
// };



/**
 * Классы могут иплементировать как типы, так и интерфейсы
 */

interface IShape {
    area(): number;
}

class Rectangle implements IShape {
    private a: number = 10;
    private b: number = 20;

    public area(): number {
        return this.a * this.b;
    }
}

function printArea(shape: IShape): void {
    console.log(shape.area());
}

printArea(new Rectangle());

// type ShapeType = {
//     area(): number;
// }
//
// class Rectangle implements ShapeType {
//     private a: number = 10;
//     private b: number = 20;
//
//     public area(): number {
//         return this.a * this.b;
//     }
// }
//
// function printArea(shape: ShapeType): void {
//     console.log(shape.area());
// }
//
// printArea(new Rectangle());

/**
 * С помощью синтаксиса объявления типов мы можем объявить Union
 */

// type Counter = {
//     (): number;
//     reset(): void;
// }
//
// export function getCounter(): Counter {
//     let count = 0;
//     const counter = (): number => ++count;
//     counter.reset = (): void => {count = 0};
//
//     return counter;
// }
//
// const counter = getCounter();
// counter(); // -> 1
// counter(); // -> 2
// counter.reset();
// counter(); // -> 1

interface Counter {
    (): number;
    reset(): void;
}

function getCounter(): Counter {
    let count = 0;
    const counter = (): number => ++count;
    counter.reset = (): void => {count = 0};

    return counter;
}

const counter = getCounter();
counter(); // -> 1
counter(); // -> 2
counter.reset();
counter(); // -> 1


 /* С типами мы использовать union operator */
type NumberOrString = string | number;

/* Нельзя расширять интерфейс типом, если при его объявлении использован union operator  */
// interface IValue extends NumberOrString {}
// -> An interface can only extend an object type or intersection of object types with statically known members.

/* Нельзя имплементировать в классе тип, при объявлении которого спользовался union operator  */
// class Class implements NumberOrString {}
// -> A class can only implement an object type or intersection of object types with statically known members.

/* Декларации интерфейсов с одинаковыми именанами сливаются - declaration merging */
export interface Circle {
    radius: number;
}

export interface Circle {
    area(): number;
}
// -> No typescript errors

/* С типами merge declaration не работает  */
// export type CircleType = {
//     radius: number;
// }

export type CircleType = {
    area(): number;
}
// -> Duplicate identifier 'CircleType'
