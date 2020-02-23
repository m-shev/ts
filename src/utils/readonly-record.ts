/**
 * Record
 */

export const enum NumberEnum {
    One,
    Two,
    Three
}

//Изменить, так чтобы допустимыми значениями ключей были только значения из перечисления
export type NumberDictionary = {[key: number]: string}

const numberDic: NumberDictionary = {
    [NumberEnum.One]: 'один',
    [NumberEnum.Two]: 'два',
    [NumberEnum.Three]: 'три',
    10: 'десять'
};

type TodoTask = {
    title: string;
}

/**
 * Readonly
 */
// Изменить тип переменной, так чтобы свойства TodoTask были доступны только для чтения
const readOnlyTask: TodoTask = {title: 'Learn typescript utils'};




