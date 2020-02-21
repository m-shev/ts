/**
 * Interface можно расширять путем наследования
 */
interface IPoint {
    x: number;
    y: number;
}

interface IShape extends IPoint {
    area: () => number;
}

export const shapeByInterface: IShape = {
    x: 1,
    y: 2,
    area: function () {
        return this.x * this.y
    }
};

/**
 * Type можно расширять с помощью type intersection
 */

type PointType = {
    x: number;
    y: number;
}

type ShapeType = PointType & {
    area: () => number;
}

export const shapeByType: ShapeType = {
    x: 1,
    y: 2,
    area: function () {
        return this.x * this.y
    }
};

/**
 * Interface могут расширяться с помощью Type
 */
interface Shape extends ShapeType {

}
