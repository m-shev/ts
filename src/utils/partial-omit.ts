export type Person = {
    id: number; // id в БД
    name: string;
    age: number;
}

/**
 * Omit
 */

//Нужно затипизировать функцию, чтобы она принмала тип Person, но без свойства id
function createPerson(person: any): Person  {
    // Где-то в базе данных создается запись для person
    return {id: 1, ...person};
}

/**
 * Partial
 */

//Нужно затипизировать функцию, чтобы она принмала тип Person,
// но свойства name и age были необязательными
function editPerson(person: any): void {
    // Где-то в базе данных выполняется редактирование person
}

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

/**
 * Pick
 */

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// Изменить тип, так, чтобы избежать дублирования кода
type TodoPreview = {
    title: string;
    completed: boolean;
};

const todoPreview: TodoPreview = {
    title: 'Clean room',
    completed: false,
};

const preview: TodoPreview = {
    title: 'Learn typescript utils',
    completed: false
}
