import { Person } from './partial-omit';

export type CreatePerson = Omit<Person, 'id'>;
export type EditPerson = Partial<CreatePerson>;

export const enum NumberEnum {
    One,
    Two,
    Three
}

//Изменить, так чтобы допустимыми значениями ключей были только значения из перечисления NumberEnum
export type NumberDictionary = Partial<Record<NumberEnum, string>>;

const numberDic: NumberDictionary = {
    [NumberEnum.One]: 'один',
    [NumberEnum.Two]: 'два',
};


/**
 * Pick
 */

interface Todo {
    title: string;
    description: string;
    completed: boolean;
};

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false
};
