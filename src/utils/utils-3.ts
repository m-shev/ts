export type Person = {
    id: number; // id в БД
    name: string;
    age: number;
}

/**
 * Переписать тип, чтобы избежать дублирования кода
 */
type CreatePerson = {
    name: string;
    age: number;
}

function createPerson(person: CreatePerson): Person  {
    // Где-то в базе данных создается запись для person
    return {id: 1, ...person};
}

createPerson({age: 20, name: 'Иван'});

/**
 * Переписать тип, чтобы избежать дублирования кода
 */
type EditPerson = {
    name?: string;
    age?: number;
}

function editPerson(person: EditPerson): void {
    // Где-то в базе данных выполняется редактирование person
}

editPerson({age: 21});

