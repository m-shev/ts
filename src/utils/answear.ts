export type Person = {
    id: number; // id в БД
    name: string;
    age: number;
}

/**
 * Переписать тип, чтобы избежать дублирования кода
 */
type CreatePerson = Omit<Person, 'id'>;

function createPerson(person: CreatePerson): Person  {
    // Где-то в базе данных создается запись для person
    return {id: 1, ...person};
}

createPerson({age: 20, name: 'Иван'});

/**
 * Переписать тип, чтобы избежать дублирования кода
 */
type EditPerson = Partial<CreatePerson>;

function editPerson(person: EditPerson): void {
    // Где-то в базе данных выполняется редактирование person
}

editPerson({name: 'Александр'});

/***************************************************************************/

export const enum TaskType {
    Call = 'call',
    Meeting = 'meeting',
    Outflow = 'outflow',
    ExpansionOfCooperation = 'expansion-of-cooperation'
}

type Task = {
    value: string;
    code: string;
}

/**
 * Изменить тип так, чтобы допустимыми значениями ключей словари были только значения из TaskType
 */
type TaskDictionary = Record<TaskType, Task>;

const taskDictionary: TaskDictionary = {
    [TaskType.Call]: {
        value: 'Звонок',
        code: '1-XYZ'
    },
    [TaskType.Meeting]: {
        value: 'Встреча',
        code: '2-XYZ'
    },
    [TaskType.Outflow]: {
        value: 'Отток',
        code: '3-XYZ'
    },
    [TaskType.ExpansionOfCooperation]: {
        value: 'Расширение сотрудничества',
        code: '4-XYZ',
    },
};

/***************************************************************************/

export type TodoTask = {
    title: string;
    description: string;
}

// Изменить тип переменной, так чтобы свойства TodoTask были доступны только для чтения
const readOnlyTask: Readonly<TodoTask> = {title: 'Learn typescript utils', description:'Typescript forever'};

/***************************************************************************/

export type Todo = {
    title: string;
    description: string;
    completed: boolean;
    planDate: Date;
    factDate: Date;
}

// Изменить тип так, чтобы избежать дублирования кода
type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todoPreview: TodoPreview = {
    title: 'Clean room',
    completed: false,
};

/***************************************************************************/

export type Call = {
    phone: string;
    planDate: Date;
}

export type Meeting = {
    address: string;
    planDate: Date;
}

export type Outflow = {
    planDate: Date;
    product: string;
}

// Изменить типизацию так, чтобы избежать многословности
function printEventDate(event: Required<{planDate: Date}>) {
    console.log(event.planDate);
}
