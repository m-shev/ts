export type TodoTask = {
    title: string;
    description: string;
}

// Изменить тип переменной, так чтобы свойства TodoTask были доступны только для чтения
const readOnlyTask: TodoTask = {title: 'Learn typescript utils', description:'Typescript forever'};

readOnlyTask.title = 'Don`t learn typescript';
